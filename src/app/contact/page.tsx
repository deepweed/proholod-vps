import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ReviewCarousel from "@/components/review-card/review-carousel/ReviewCarousel";

export default function Conact() {
    return (
      <>
      <div className="block">
        <Link href="https://vk.com/proholodpro">
          <div className="w-full h-[370px] md:h-[200px] bg-[#0077FF] p-7 rounded-xl">
            <div className="block md:flex md:justify-between align-baseline">
              <div>
                <h2 className="text-white text-2xl font-bold">Напишите нам ВКонтакте</h2>
                <p className="text-white font-medium w-full md:w-2/3 mt-2">
                  Появились вопросы? Не знаете какой кондиционер подойдет именно Вам? Напишите
                  нам в ВКонтакте - один из способов связи с нами. Мы обязательно Вам поможем.
                </p>
                
              </div>
              <div>
                <Image src="/vklogo.svg" width={90} height={90} alt="ВКонтакте"></Image>
              </div>
            </div>
          </div>
        </Link>
        <h2 className="text-black text-2xl font-bold mt-4 mb-4">Где мы находимся?</h2>
        <div className="mb-4">
            <div className="relative overflow-hidden mb-4">
                <a href="https://yandex.com/maps/org/prokholod/142837393055/?utm_medium=mapframe&utm_source=maps" className="text-[#eee] text-[12px] absolute top-2">
                  PROхолод
                </a>
                <a href="https://yandex.com/maps/1/moscow-and-moscow-oblast/category/air_conditioners/184107463/?utm_medium=mapframe&utm_source=maps" className="text-[#eee] text-[12px] absolute top-4">
                  Кондиционеры в Москве и Московской области
                </a>
                <a href="https://yandex.com/maps/1/moscow-and-moscow-oblast/category/industrial_refrigeration_equipment/184106976/?utm_medium=mapframe&utm_source=maps" className="text-[#eee] text-[12px] absolute top-6">
                  Промышленное холодильное оборудование в Москве и Московской области
                </a>
                <iframe src="https://yandex.com/map-widget/v1/org/prokholod/142837393055/?ll=38.263416%2C55.543272&z=17" frameBorder="1" allowFullScreen className="w-full h-[400px] relative"></iframe>
            </div>
            <p className="font-medium text-sm text-gray-500 mb-4">Адрес: г. Раменское, ул. Михалевича, д. 24</p>
        </div>
        <div className="mt-4">
          <h2 className="text-black text-2xl font-bold mb-4">Еще несколько способов связаться с нами</h2>
          <p className="font-medium text-xl text-gray-500 mb-4">
               Свяжитесь с нами самостоятельно или оставьте 
               заявку на обратный звонок. Мы перезвоним Вам в 
               ближайшее время и поможем решить любой возникший вопрос:
          </p>
          <p className="font-medium text-xl text-gray-500 mb-3">
            <span className="text-black font-semibold">8(926)665-04-62</span> - основной
            номер, ответим по любым вопросам.
          </p>
          <p className="font-medium text-xl text-gray-500 mb-3">
            <span className="text-black font-semibold mt-3">8(915)038-38-71</span> - гарантийные
            случаи, звоните касательно гарантии.
          </p>
          <p className="font-medium text-xl text-gray-500 mb-3">
            <span className="text-black font-semibold mt-3">8(993)250-04-62</span> - проконсультируем
            касательно оборудования: поможем подобрать кондиционер для дома или холодильное оборудование для предприятия.
          </p>
        </div>
        <div>
          <h2 className="text-black text-xl font-bold mb-4">Ознакомьтесь с реальными отзывами наших клиентов</h2>
          <ReviewCarousel />
        </div>
      </div>
      </>
    );
}