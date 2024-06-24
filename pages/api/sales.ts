import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prismaClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sales = await prisma.sales.findMany();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching sales data' });
  } finally {
    await prisma.$disconnect();
  }
}
