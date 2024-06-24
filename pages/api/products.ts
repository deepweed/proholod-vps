import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, sort, brand, series, minPrice, maxPrice, isInventor} = req.query;

  // Конвертируем isInvertor в boolean значение
  const inventorFilter = isInventor !== undefined ? (isInventor === 'true') : undefined;

  const filters: Prisma.ProductWhereInput = {
    ...(category && { category: String(category) }),
    ...(brand && { brand: String(brand) }),
    ...(series && { series: String(series) }),
    ...(minPrice && { cost: { gte: parseFloat(String(minPrice)) } }),
    ...(maxPrice && { cost: { lte: parseFloat(String(maxPrice)) } }),
    ...(inventorFilter !== undefined && { stats: { some: { isInventor: inventorFilter } } }),
  };

  const orderBy: Prisma.ProductOrderByWithRelationInput[] | undefined = 
    sort === 'max-price' ? 
    [{ cost: 'asc' }] : 
    sort === 'min-price' ?
    [{ cost: 'desc' }] : 
    undefined;

  try {
    const products = await prisma.product.findMany({
      where: filters,
      orderBy: orderBy,
      include: {
        stats: true, // включение данных из таблицы Stats
      },
    });

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
