import ReviewCarousel from "@/components/review-card/review-carousel/ReviewCarousel";
import Link from "next/link";

export default function About() {
    return (
      <>
      <section className="mb-5">
        <h2 className="text-2xl font-semibold mb-2">О компании</h2>
        <div className="block lg:flex lg:justify-between mb-4">
          <div>
            <p className="w-full lg:w-2/3 font-medium mb-3">
              Компания <span className="text-blue-600 font-bold">PROХолод</span> - ваш надежный партнер в установке 
              кондиционеров и холодильного оборудования в городе Раменское 
              и Раменской области. Мы предлагаем полный спектр услуг по 
              монтажу бытовых и коммерческих систем кондиционирования, а также 
              профессиональной установке холодильного оборудования для различных 
              бизнесов.
            </p>
            <p className="w-full lg:w-2/3 font-bold mb-3">
              Наши преимущества:
            </p>
            <p className="w-full lg:w-2/3 font-medium mb-2">
              <span className="font-semibold">Профессионализм и опыт:</span> Команда <span className="text-blue-600 font-bold">PROХолод</span> состоит из 
              квалифицированных специалистов с многолетним опытом в 
              области климатической и холодильной техники.
            </p>
            <p className="w-full lg:w-2/3 font-medium mb-2">
              <span className="font-semibold">Качество и надежность:</span> Мы используем только проверенные 
              материалы и оборудование, гарантируя высокое качество выполненных работ.
            </p>
            <p className="w-full lg:w-2/3 font-medium mb-2">
              <span className="font-semibold">Индивидуальный подход:</span> Мы подбираем решения, которые максимально 
              соответствуют вашим потребностям и особенностям объекта.
            </p>
            <p className="w-full lg:w-2/3 font-medium mb-2">
              <span className="font-semibold">Сервисное обслуживание:</span> Предоставляем полный 
              комплекс услуг по техническому обслуживанию и ремонту установленных систем.
              Более подробно про сервисное обслуживание можете узнать, перейдя в 
              раздел <Link className="text-blue-600" href="/guarantee-service">гарантийного обслуживания.</Link>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Как добраться?</h2>
            <div className="relative overflow-hidden">
              <a href="https://yandex.com/maps/org/prokholod/142837393055/?utm_medium=mapframe&utm_source=maps" className="text-[#eee] text-[12px] absolute top-2">
                PROхолод
              </a>
              <a href="https://yandex.com/maps/1/moscow-and-moscow-oblast/category/air_conditioners/184107463/?utm_medium=mapframe&utm_source=maps" className="text-[#eee] text-[12px] absolute top-4">
                Кондиционеры в Москве и Московской области
              </a>
              <a href="https://yandex.com/maps/1/moscow-and-moscow-oblast/category/industrial_refrigeration_equipment/184106976/?utm_medium=mapframe&utm_source=maps" className="text-[#eee] text-[12px] absolute top-6">
                Промышленное холодильное оборудование в Москве и Московской области
              </a>
              <iframe src="https://yandex.com/map-widget/v1/org/prokholod/142837393055/?ll=38.263416%2C55.543272&z=17" width="560" height="400" frameBorder="1" allowFullScreen className="relative"></iframe>
            </div>
            <h2 className="text-xl font-semibold mt-2 mb-2">Способ связи</h2>
            <p className="font-medium text-gray-500">
               Свяжитесь с нами самостоятельно или оставьте 
               заявку на обратный звонок. Мы перезвоним Вам в 
               ближайшее время:<br />
               <span className="text-black font-semibold">8(926)665-04-62</span> - основной
               номер, ответим по любым вопросам.<br />
               <span className="text-black font-semibold mt-3">8(915)038-38-71</span> - гарантийные
               случаи, звоните касательно гарантии.<br />
               <span className="text-black font-semibold mt-3">8(993)250-04-62</span> - проконсультируем
               касательно оборудования: поможем подобрать кондиционер для дома или холодильное оборудование для предприятия.
            </p>
            <p className="font-medium text-gray-500 mt-3">
              Или можете перейти в нашу <Link className="text-blue-600" target="_blank" href="https://vk.com/im?media=&sel=-225921402">группу ВКонтакте</Link> и 
              связаться с нами там.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Отзывы</h2>
        <ReviewCarousel />
      </section>
      </>
      
    );
}