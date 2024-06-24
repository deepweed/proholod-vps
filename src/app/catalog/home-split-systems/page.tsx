import { prisma } from '@/lib/prismaClient';
import HomeSplit from '@/components/HomeSplit/HomeSplit';
import { Product } from '@/types';

const ITEMS_PER_PAGE = 15;

async function getProducts(page: number): Promise<{ products: Product[], currentPage: number, totalPages: number }> {
  const skip = (page - 1) * ITEMS_PER_PAGE;

  const products = await prisma.product.findMany({
    where: {
      category: 'home-split-systems',
    },
    include: {
      images: true,
      stats: true,
    },
    skip,
    take: ITEMS_PER_PAGE,
  });

  const totalProducts = await prisma.product.count({
    where: {
      category: 'home-split-systems',
    },
  });

  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  return {
    products: products.map((product) => ({
      ...product,
      cost: product.cost.toNumber(),
      series: product.series, 
      images: product.images.map((image) => ({
        id: image.id,
        imagePath: image.imagePath,
        productId: image.productId,
      })),
      stats: product.stats !== null ? product.stats.map((stat: any) => ({
        isInventor: stat.isInventor,
        connectingPower: stat.connectingPower,
        recomendSquare: stat.recomendSquare || null,
        coolingKw: stat.coolingKw.toString(),
        warmingKw: stat.warmingKw.toString(),
        diameterOfCondensatePipe: stat.diameterOfCondensatePipe,
        maxTrace: stat.maxTrace,
        maxHeight: stat.maxHeight,
        minTempCooling: stat.minTempCooling,
        maxTempCooling: stat.maxTempCooling,
        minTempWarm: stat.minTempWarm,
        maxTempWarm: stat.maxTempWarm,
        unitSoundLevel: stat.unitSoundLevel,
        unitSoundLevelBlock: stat.unitSoundLevelBlock,
        b_temperatureInCamera: stat.b_temperatureInCamera || null,
        b_coolRoomValue: stat.b_coolRoomValue,
        b_coolWarming: stat.b_coolWarming,
        b_powerConsumption: stat.b_powerConsumption,
        b_nominalPower: stat.b_nominalPower,
        b_NoiseLvl: stat.b_NoiseLvl,
        b_WinterSet: stat.b_WinterSet,
        b_TrackLenght: stat.b_TrackLenght,
        b_MaxTrackLenght: stat.b_MaxTrackLenght,
        b_diametrPipes: stat.b_diametrPipes,
        width: stat.width || null,
        widthPack: stat.widthPack || null,
        weight: stat.weight || null,
        weightPack: stat.weightPack || null,
        widthBlock: stat.widthBlock || null,
        widthBlockPack: stat.widthBlockPack || null,
        weightBlock: stat.weightBlock || null,
        weightBlockPack: stat.weightBlockPack || null,
      })) : [],
    })),
    currentPage: page,
    totalPages,
  };
}

export default async function HomeSplitPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || '1', 10);
  const { products, currentPage, totalPages } = await getProducts(page);

  return <HomeSplit products={products} currentPage={currentPage} totalPages={totalPages} />;
}
