import CatalogCard from "@/components/catalog-card/CatalogCard";
import ServiceCard from "@/components/service-card/ServiceCard";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ReviewCard from "@/components/review-card/ReviewCard";
import ReviewCarousel from "@/components/review-card/review-carousel/ReviewCarousel";

export default function Home() {
  return (
    <>
      <section className="mb-6 mt-6">
        <h1 className="mb-6 text-2xl font-semibold">Каталог</h1>
        <CatalogCard />
      </section>
      <section className="mb-6 mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Услуги</h2>
        <div className="block mb-3 lg:flex lg:justify-between">
          <Link className="mr-2" href="/service">
              <div className="w-full mb-2 lg:w-[660px] h-[400px] rounded-xl p-7 bg-[#F8FAFF] cursor-pointer relative">
                <h2 className="text-2xl font-semibold md:text-3xl">Монтаж оборудования</h2>
                  <p className="text-[18px] font-medium text-gray-500 w-3/4 mt-3 line-clamp-4">
                    Работы по монтажу кондиционеров, мульти сплит-систем, мульттизональных кондиционеров
                  </p>
                  <Button className="absolute bottom-0 mb-7" size="lg" variant={"blue"}>К услугам</Button>
              </div>
          </Link>
          <div className="block">
            <Link className="mb-1" href="/service#drenazh">
                <div className="w-full mb-2 lg:w-[660px] h-[243px] rounded-xl p-7 bg-[#f9fafc] cursor-pointer relative">
                <h2 className="text-2xl font-semibold md:text-3xl">Дренаж</h2>
                    <p className="text-[18px] font-medium text-gray-500 w-3/4 mt-3 line-clamp-3">
                      Установка дренажной помпы встроенной, установка дренажной помпы накладной..
                    </p>
                    <Button size="lg" className="absolute bottom-0 mb-7" variant={"blue"}>К услугам</Button>
                </div>
            </Link>
            <Link href="/service">
              <div className="w-full mb-2 lg:w-[660px] h-[170px] lg:h-[150px] rounded-xl p-7 bg-[#f9fafc] cursor-pointer relative">
              <h2 className="text-2xl text-black font-semibold md:text-3xl">И другие услуги..</h2>
                  <p className="text-[18px] font-medium text-gray-500 w-3/4 mt-3 line-clamp-3">
                      Выезд монтажной бригады, демонтаж и так далее..
                  </p>
              </div>
          </Link>
          </div>
        </div>
      </section>
      <section className="mb-16 mt-16">
        <h2 className="mb-3 text-2xl font-semibold">Отзывы</h2>
        <ReviewCarousel />
      </section>
      <section className="mb-15">
        <h2 className="mb-6 text-xl font-semibold">Бренды</h2>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <Link className="mb-3" href="/catalog?brand=Dahaci">
            <Image src="/images/brands/dahaci.svg" width={100} height={20} alt="Перейти в Dahaci.."/>
          </Link>
          <Link className="mb-3" href="/catalog?brand=Fujitsu">
            <Image src="/images/brands/fujitsu.svg" width={120} height={20} alt="Перейти в Fujitsu.."/>
          </Link>
          <Link className="mb-8" href="/catalog?brand=Lessar">
            <Image src="/images/brands/lessar.svg" width={144} height={10} alt="Перейти в Lessar.."/>
          </Link>
          <Link className="mb-8" href="/catalog?brand=QuattroClima">
            <Image src="/images/brands/qc.svg" width={295} height={20} alt="Перейти в QC.."/>
          </Link>
          <Link className="mb-8" href="/catalog?brand=Tosot">
            <Image src="/images/brands/tosot.svg" width={160} height={20} alt="Перейти в Tosot.."/>
          </Link>
        </div>
      </section>
    </>
    
  );
}
