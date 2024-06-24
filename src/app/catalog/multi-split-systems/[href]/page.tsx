import { prisma } from '@/lib/prismaClient';
import { Product } from "@/types";
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NotFoundMsg from '@/components/not-found-msg/NotFoundMsg';
import ProductButton from '@/components/product-button/ProductButton';
import StockButton from '@/components/stock-button/StockButton';
import { Metadata } from 'next';

type Props = {
  params: {
    href: string;
    description: string;
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const trueTitle = params.href.replace(/-block-/g, ' ').toUpperCase();

  return {
    title: `Блок ${trueTitle}`,
    description: `Блок ${trueTitle} - решение ваших задач с охлаждением и заморозкой продукции.`,
    openGraph: {
      title: `Блок ${trueTitle}`,
      description: `Сплит-система ${params.href} - решение ваших задач с охлаждением и заморозкой продукции.`
    }
  }
}

const formatPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return formattedPrice.replace(/(\d)\s(?=\d)/g, '$1,');
};


async function getProductByHref(href: string): Promise<Product | null> {
  const product = await prisma.product.findUnique({
    where: { href },
    include: {
      images: true,
      stats: true,
    },
  });

  if (!product) return null;

  return {
    ...product,
    cost: product.cost.toNumber(),
    series: product.series || null,
    images: product.images.map((image) => ({
      ...image,
    })),
    stats: product.stats || [],
  };
}

interface ProductPageProps {
  params: {
    href: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const productHref = params.href;
  const product = await getProductByHref(productHref);

  if (!product) {
    return(
      <NotFoundMsg />
    );
  }

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
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/catalog">Каталог</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/catalog/multi-split-systems">Мультисплит-системы</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </section>
        <section className="mb-3">
          <div className="block w-full lg:flex justify-between">
            <div className="mb-2 lg:w-1/2">
              <Carousel className="w-full max-w-xl">
                <CarouselContent>
                  {product.images.map((image) =>
                    image.imagePath.map((path, index) => (
                      <CarouselItem key={`${image.id}-${index}`}>
                        <img className="max-h-[300px]" src={path} alt={product.title} />
                      </CarouselItem>
                    ))
                  )}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
              <p className="text-center text-gray-500 font-medium text-[12px] block md:hidden">Листайте вправо-влево</p>
            </div>
            <div className="mb-2 lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-5">{product.title}</h2>
              <p className="font-semibold">Бренд: <span className="font-normal">{product.brand}</span></p>
              {product.series && <p className="font-semibold mb-4">Серия: <span className="font-normal">{product.series}</span></p>}
              {product.cost === 0 ? (
                <p className="text-sm font-medium text-blue-700 mb-5">Цена не указана</p>
              ) : (
                <p className="text-3xl font-bold text-blue-600 mb-5">{formatPrice(product.cost)}</p>
              )}
              {product.isInStock ? (
                <ProductButton title={product.title} />
              ) : (
                <StockButton />
              )}
            </div>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="text-xl font-semibold mb-2">Описание</h2>
          {product.description == "" ? (
            <p className="text-gray-500 text-sm font-medium">Описание отсутствует</p>
          ) : (
            <p className="text-sm lg:text-md lg:w-2/3">{product.description}</p>
          )}
        </section>
        <section className="mb-3">
        <h2 className="text-xl font-semibold mb-2">Характеристики</h2>
          {product.stats && product.stats.length > 0 ? (
            <div className="w-full bg-gray-100 p-4 rounded-md shadow-md">
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Инвертор</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">
                    {product.stats[0].isInventor ? "Да" : "Нет"}
                  </p>
                </div>
              </div>
              {product.stats[0].connectingPower != "Нет данных" && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Подключение электропитания</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].connectingPower}</p>
                </div>
              </div>
              )}
              {product.stats[0].recomendSquare != null && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Рекомендуемая площадь помещения, м2, до</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].recomendSquare}</p>
                </div>
              </div>
              )}
              {product.stats[0].coolingKw != "0" && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Производительность, охлаждение, кВт</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].coolingKw}</p>
                </div>
              </div>
              )}
              {product.stats[0].warmingKw != "0" && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Производительность, нагрев, кВт</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].warmingKw}</p>
                </div> 
              </div>
              )}
              {product.stats[0].diameterOfCondensatePipe != "Нет данных" && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Диаметр трубопровода для слива конденсата, мм</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].diameterOfCondensatePipe}</p>
                </div> 
              </div>
              )}
              {product.stats[0].maxTrace != 0 && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Максимальная длина трассы, м</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].maxTrace}</p>
                </div> 
              </div>
              )}
              {product.stats[0].maxHeight != 0 && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Максимальный перепад высот, м</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].maxHeight}</p>
                </div> 
              </div>
              )}
              {product.stats[0].minTempCooling != 0 && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Мин. допустимая температура наружного воздуха в режиме охлаждения, °С</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].minTempCooling}</p>
                </div> 
              </div>
              )}
              {product.stats[0].maxTempCooling != 0 && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Макс. допустимая температура наружного воздуха в режиме охлаждения, °С</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].maxTempCooling}</p>
                </div> 
              </div>
              )}
              {product.stats[0].minTempWarm != 0 && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Мин. допустимая температура наружного воздуха в режиме обогрева °С</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].minTempWarm}</p>
                </div> 
              </div>
              )}
              {product.stats[0].maxTempWarm != 0 && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Макс. допустимая температура наружного воздуха в режиме обогрева °С</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].maxTempWarm}</p>
                </div> 
              </div>
              )}
              {product.stats[0].unitSoundLevel != "Нет данных" && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Уровень звукового давления внутреннего блока, дБ</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].unitSoundLevel}</p>
                </div> 
              </div>
              )}
              {product.stats[0].unitSoundLevelBlock != "Нет данных" && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Уровень звукового давления наружного блока, дБ</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].unitSoundLevelBlock}</p>
                </div> 
              </div>
              )}
              {product.stats[0].width != null && (
              <div className="mb-2">
                <p className="font-semibold text-sm">Блок внутренний - {product.title.split(" ").slice(3).join(" ")}</p>
              </div>
              )}
              {product.stats[0].width != null && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Размеры ШхВхГ, мм:</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].width}</p>
                </div> 
              </div>
              )}
              {product.stats[0].widthPack != null && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Упаковка ШхВхГ, мм:</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].widthPack}</p>
                </div> 
              </div>
              )}
              {product.stats[0].weight != null && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Масса, кг:</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].weight}</p>
                </div> 
              </div>
              )}
              {product.stats[0].weightPack != null && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Масса в упаковке, кг:</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].weightPack}</p>
                </div> 
              </div>
              )}
              {product.stats[0].widthBlock != null && (
              <div className="mb-2">
                <p className="font-semibold text-sm">Блок наружный - {product.title.split(" ").slice(3).join(" ")}</p>
              </div>
              )}
              {product.stats[0].widthBlock != null && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Размеры ШхВхГ, мм:</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].widthBlock}</p>
                </div> 
              </div>
              )}
              {product.stats[0].widthBlockPack != null && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Упаковка ШхВхГ, мм:</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].widthBlockPack}</p>
                </div> 
              </div>
              )}
              {product.stats[0].weightBlock != null && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Масса, кг:</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].weightBlock}</p>
                </div> 
              </div>
              )}
              {product.stats[0].weightBlockPack != null && (
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">Масса в упаковке, кг:</p>
                  <div className="flex-1 border-b border-gray-300 mr-2 ml-2"></div>
                  <p className="text-sm font-semibold">{product.stats[0].weightBlockPack}</p>
                </div> 
              </div>
              )}
            </div>
          ) : (
            <div className="w-full bg-gray-100 p-4 rounded-md shadow-md">
              <p className="text-gray-500 text-sm font-medium">
                Отсутствуют подробные характеристики, загрузите инфо-лист для уточнения нужных Вам характеристик
              </p>
            </div>
          )}
        </section>
    <div>
    </div>
    </>
  );
};

export default ProductPage;
