import { prisma } from '@/lib/prismaClient';
import { Product } from '@/types';
import Catalog from '@/components/Catalog/CatalogPage';

const ITEMS_PER_PAGE = 15;

async function getProducts(page: number, query: any): Promise<{ products: Product[], currentPage: number, totalPages: number }> {
  const skip = (page - 1) * ITEMS_PER_PAGE;

  const filters: any = {
    ...(query.category && { category: query.category }),
    ...(query.brand && { brand: query.brand }),
    ...(query.series && { series: query.series }),
    ...(query.minPrice && { cost: { gte: parseFloat(query.minPrice) } }),
    ...(query.maxPrice && { cost: { lte: parseFloat(query.maxPrice) } }),
  };

  if (query.isInventor) {
    filters.stats = {
      some: {
        isInventor: query.isInventor === 'true',
      }
    };
  }

  const orderBy: any = 
    query.sort === 'max-price' ? { cost: 'asc' } : 
    query.sort === 'min-price' ? { cost: 'desc' } : 
    undefined;

  const products = await prisma.product.findMany({
    where: filters,
    orderBy: orderBy,
    include: {
      images: true,
      stats: true,
    },
    skip,
    take: ITEMS_PER_PAGE,
  });

  const totalProducts = await prisma.product.count({
    where: filters,
  });

  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  return {
    products: products.map((product) => ({
      ...product,
      cost: product.cost.toNumber(),
      series: product.series || null,
      images: product.images.map((image) => ({
        ...image,
      })),
      stats: product.stats || [],
    })),
    currentPage: page,
    totalPages,
  };
}

export default async function CatalogPage({ searchParams }: { searchParams: { page?: string, category?: string, sort?: string, brand?: string, series?: string, minPrice?: string, maxPrice?: string, isInvertor?: string } }) {
  const page = parseInt(searchParams.page || '1', 10);
  const { products, currentPage, totalPages } = await getProducts(page, searchParams);

  let result;

  try {
    result = await getProducts(page, searchParams);
  } finally {
    await prisma.$disconnect();
  }

  return <Catalog products={products} currentPage={currentPage} totalPages={totalPages} />;
}
