
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prismaClient';
import { Product } from '@/types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  if (typeof query !== 'string' || query.trim() === '') {
    return res.status(400).json([]);
  }

  const results = await prisma.product.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { brand: { contains: query, mode: 'insensitive' } },
        { series: { contains: query, mode: 'insensitive' } },
      ],
    },
    include: {
      images: true,
      stats: true,
    },
  });

  const formattedResults: Product[] = results.map(result => ({
    ...result,
    cost: result.cost.toNumber(),
    stats: result.stats, 
  }));

  res.status(200).json(formattedResults);
};
