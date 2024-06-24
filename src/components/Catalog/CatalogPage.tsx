import { GetServerSideProps } from 'next';
import { Product } from '@/types';
import Link from "next/link";
import { prisma } from '@/lib/prismaClient';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Pagination from "../pagination/Pagination";

import Sorting from "@/components/sorting/Sorting";
import ProductCard from "@/components/product-card/ProductCard";

const formatPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return formattedPrice.replace(/(\d)\s(?=\d)/g, '$1,');
};

interface CommercialSplitProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
}

const Catalog = ({ products, currentPage, totalPages }: CommercialSplitProps) => {

    return (
        <>
        <section className="mb-5">
          <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">На главную</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
        </section>
        <section className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">Каталог</h2>
              <p className="text-sm text-gray-500 mb-2"><span className="font-semibold">Важно: </span>В каталоге отображен общий ассортимент. Наличие уточняется отдельно.</p>
              <Sorting />
        </section>
        <section>
        <div className="mb-4">
          <ul className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard 
                  title={product.title} 
                  brand={product.brand} 
                  series={product.series || "null"} 
                  cost={formatPrice(product.cost)}
                  image={product.images[0]?.imagePath[0] || '/default-image.jpg'}
                  link={`/catalog/${product.category}/${product.href}`}
                  isInStock={product.isInStock}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mb-5">
        <Pagination currentPage={currentPage} totalPages={totalPages}/>
      </section>
        </>
      );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { page = '1', category, sort, brand, series, minPrice, maxPrice, isInvertor } = query;

  const currentPage = parseInt(page as string, 10);
  const itemsPerPage = 10;

  const filters: any = {
    ...(category && { category: String(category) }),
    ...(brand && { brand: String(brand) }),
    ...(series && { series: String(series) }),
    ...(minPrice && { cost: { gte: parseFloat(String(minPrice)) } }),
    ...(maxPrice && { cost: { lte: parseFloat(String(maxPrice)) } }),
    ...(isInvertor && { stats: { some: { isInventor: query.isInvertor === 'true' } } }),
  };

  const orderBy: any | undefined = 
    sort === 'max-price' ? [{ cost: 'asc' }] : 
    sort === 'min-price' ? [{ cost: 'desc' }] : 
    undefined;


  const products = await prisma.product.findMany({
    where: filters,
    orderBy: orderBy,
    skip: (currentPage - 1) * itemsPerPage,
    take: itemsPerPage,
    include: { images: true },
  });

  const totalProducts = await prisma.product.count({ where: filters });
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return {
    props: {
      products,
      currentPage,
      totalPages,
    },
  };
};

export default Catalog;