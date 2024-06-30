import ServiceButton from "@/components/service-button/ServiceButton";
import Link from "next/link";

const Service = () => {
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Прайс-лист на работы по монтажу кондиционеров и другие услуги</h1>
          <div className="flex flex-col mb-4 space-y-1 lg:w-[400px]">
            <h2 className="font-medium">Быстрая навигация</h2>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#standart-split-systems">1. Настенные сплит-системы (стандартный монтаж)</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#industrial-split-systems">2. Настенные сплит-системы (стандартный монтаж)</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#multi-split-systems">3. Мульти-сплит системы</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#belluna-light-econom">4. Belluna сплит-системы Лайт, Эконом</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#belluna-invertor">5. Belluna сплит-системы Инвертор, Шубы</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#rmx-vrv">6. Мультизональные системы RMX, VRV</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#more-options">7. Дополнительные работы и опции</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#interconnect-line">8. Межблочная трасса</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#drenazh">9. Дренаж</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#electro">10. Электромонтаж</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#general-works">11. Общестроительные работы</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#high-work">12. Высотные работы</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#dismantling-work">13. Демонтажные работы</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#service-work">13. Сервисные работы</Link>
            <Link className="text-blue-600 hover:text-blue-800" href="/service#other-expenses">14. Транспортные и другие расходы</Link>
          </div>

          {/* Настенные сплит-системы (стандартный монтаж) */}
          <section className="mb-4">
            <ul className="list-disc pl-5 mb-4">
              <li>Выезд монтажной бригады по г. Раменское и в радиусе 15 км. Свыше 15 км - 50 руб./км</li>
              <li>Сверление отверстия в стене для прокладки межблочных коммуникаций (толщина стены не более 80 см)</li>
              <li>Монтаж внутреннего блока</li>
              <li>Монтаж наружного блока кондиционера</li>
              <li>Прокладка фреоновой магистрали в сборке длиной до 4 м.п., дренажной трубы, кабеля электропитания</li>
              <li>Герметизация отверстия</li>
              <li>Уборка зоны работ</li>
              <li>Пуско-наладка кондиционера, проверка основных функций</li>
              <li>Работа на высоте не более 3 м</li>
              <li>Фасад здания не вентилируемый, не "мокрый"</li>
              <li>Свободный доступ из окна/с балкона, внешний блок крепится на кронштейн/укладывается в имеющуюся корзинку</li>
            </ul>
            <h2 id="standart-split-systems" className="text-xl font-semibold mb-2">Настенные сплит-системы (стандартный монтаж)</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Тип кондиционера</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж настенного кондиционера 07-09 (D труб=6.35/9.52мм) (Q0=1.5-3 кВт)</td>
                  <td className="py-2 px-4 border-b">12000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж настенного кондиционера 12 (D труб=6.35/12.70мм) (Q0=3.5-4.5 кВт)</td>
                  <td className="py-2 px-4 border-b">14000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж настенного кондиционера 18 (D труб=6.35/12.70мм) (Q0=4.5-6.0 кВт)</td>
                  <td className="py-2 px-4 border-b">16000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж настенного кондиционера 24 (D труб=6.35/15.88мм) (Q0=6.0-8.1 кВт)</td>
                  <td className="py-2 px-4 border-b">20000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж настенного кондиционера 36 (D труб=9.52/15.88мм) (Q0=9.0-10.1 кВт)</td>
                  <td className="py-2 px-4 border-b">28000* руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p className="text-sm text-gray-500 mb-2 mt-2">* Стоимость монтажа будет дороже на 2000 рублей в случае, если производится монтаж оборудования, купленного не у нас.</p>
          <ServiceButton buttonTitle="Заказать монтаж настенного кондеционера" dialogTitle="Монтаж настенного кондиционера" dialogDesc="После отправки формы мы получим вашу заявку на монтаж настенного кондиционера. Мы свяжемся с Вами в ближайшее время." />

          {/* Полупромышленные сплит-системы */}
          <section id="industrial-split-systems" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Полупромышленные сплит-системы</h2>
            <p className="mb-4">Стоимость межблочной трассы, сверление отверстий, электромонтажные работы рассчитываются отдельно по прайсу, исходя из индивидуальных условий объекта.</p>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Тип кондиционера</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 12 (D труб=6.35/12.70мм) (Q0=3.0-4.5 кВт)</td>
                  <td className="py-2 px-4 border-b">8000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 18 (D труб=6.35/12.70мм) (Q0=4.5-6.0 кВт)</td>
                  <td className="py-2 px-4 border-b">10000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 24 (D труб=6.35/15.88мм) (Q0=6.0-8.1 кВт)</td>
                  <td className="py-2 px-4 border-b">12000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 28-36 (D труб=9.52/15.88мм) (Q0=8.1-11 кВт)</td>
                  <td className="py-2 px-4 border-b">14000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 48 (D труб=9.52/19.05мм) (Q0=11-15 кВт)</td>
                  <td className="py-2 px-4 border-b">16000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 54-60 (D труб=12.70/19.05мм) (Q0=15-18 кВт)</td>
                  <td className="py-2 px-4 border-b">19000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 75 (D труб=12.70/19.05мм) (Q0=18-22 кВт)</td>
                  <td className="py-2 px-4 border-b">24000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 100 (D труб=15.88/28.58мм) (Q0=22-29 кВт)</td>
                  <td className="py-2 px-4 border-b">30000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 125 (D труб=15.88/34.92мм) (Q0=29-34 кВт)</td>
                  <td className="py-2 px-4 border-b">35000* руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p className="text-sm text-gray-500 mb-2 mt-2">* Стоимость монтажа будет дороже на 2000 рублей в случае, если производится монтаж оборудования, купленного не у нас.</p>
          <ServiceButton buttonTitle="Заказать монтаж полупромышленного кондиционера" dialogTitle="Монтаж полупромышленного кондиционера" dialogDesc="После отправки формы мы получим вашу заявку на монтаж полупромышленного кондиционера. Мы свяжемся с Вами в ближайшее время." />

          {/* Мульти-сплит системы */}
          <section id="multi-split-systems" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Мульти-сплит системы</h2>
            <p className="mb-4">Расчет ведется из учета объема работ и мощности блоков системы</p>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Модель</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Мульти-сплит системы (2 блока)</td>
                  <td className="py-2 px-4 border-b">17000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Мульти-сплит системы (3 блока)</td>
                  <td className="py-2 px-4 border-b">20000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Мульти-сплит системы (4 блока)</td>
                  <td className="py-2 px-4 border-b">24000* руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p className="text-sm text-gray-500 mb-2 mt-2">* Стоимость монтажа будет дороже на 2000 рублей в случае, если производится монтаж оборудования, купленного не у нас.</p>
          <ServiceButton buttonTitle="Заказать монтаж мульти-сплит системы" dialogTitle="Монтаж мульти-сплит системы" dialogDesc="После отправки формы мы получим вашу заявку на мульти-сплит системы. Мы свяжемся с Вами в ближайшее время." />

          {/* Belluna сплит-системы Лайт, Эконом */}
          <section id="belluna-light-econom" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Belluna сплит-системы Лайт, Эконом</h2>
            <p className="mb-4">При длинне трассы до 5 м, удаленность блока управления 2 м, бурение одного отверстия D=50 мм</p>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Модель</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">S115 - S115W</td>
                  <td className="py-2 px-4 border-b">17000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">S218 - S218W</td>
                  <td className="py-2 px-4 border-b">19000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">S226 - S226W</td>
                  <td className="py-2 px-4 border-b">23000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">S232 - S232W</td>
                  <td className="py-2 px-4 border-b">26000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">S342 - S342W</td>
                  <td className="py-2 px-4 border-b">32000* руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p className="text-sm text-gray-500 mb-2 mt-2">* Стоимость монтажа будет дороже на 2000 рублей в случае, если производится монтаж оборудования, купленного не у нас.</p>
          <ServiceButton buttonTitle="Заказать монтаж сплит-систем Belluna" dialogTitle="Монтаж сплит-систем Belluna Лайт, Эконом" dialogDesc="После отправки формы мы получим вашу заявку на монтаж сплит систем Belluna. Мы свяжемся с Вами в ближайшее время." />

          {/* Belluna сплит-системы Инвертор, Шубы */}
          <section id="belluna-invertor" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Belluna сплит-системы Инвертор, Шубы</h2>
            <p className="mb-4">При длинне трассы до 5 м, удаленность блока управления 2 м, бурение одного отверстия D=50 мм</p>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Модель</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">IP-1</td>
                  <td className="py-2 px-4 border-b">18000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">IP-2</td>
                  <td className="py-2 px-4 border-b">22000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">IP-3</td>
                  <td className="py-2 px-4 border-b">27000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">IP-4</td>
                  <td className="py-2 px-4 border-b">32000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">IP-5</td>
                  <td className="py-2 px-4 border-b">36000* руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">IP-6</td>
                  <td className="py-2 px-4 border-b">38000* руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p className="text-sm text-gray-500 mb-2 mt-2">* Стоимость монтажа будет дороже на 2000 рублей в случае, если производится монтаж оборудования, купленного не у нас.</p>
          <ServiceButton buttonTitle="Заказать монтаж сплит-систем Belluna" dialogTitle="Монтаж сплит-систем Belluna Инвертор, Шубы" dialogDesc="После отправки формы мы получим вашу заявку на монтаж сплит систем Belluna. Мы свяжемся с Вами в ближайшее время." />

          {/* Мультизональные системы RMX, VRV */}
          <section id="rmx-vrv" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Мультизональные системы RMX, VRV</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Модель</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж мультизональная системы RMX, VRV (без учета трасс, BP-блоков, рефнет)</td>
                  <td className="py-2 px-4 border-b">(Σцен сплит систем) х1,2</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Пусконаладочные работы системы (RMX, VRV)</td>
                  <td className="py-2 px-4 border-b">10% от стоимости оборудования</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Установка BP-блока (только работа)</td>
                  <td className="py-2 px-4 border-b">6500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Опрессовка смонтированной системы азотом (25 Бар)</td>
                  <td className="py-2 px-4 border-b">От 10000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Установка рефнет (1 комплект жидкость/газ) (только работа)</td>
                  <td className="py-2 px-4 border-b">3000 руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <ServiceButton buttonTitle="Заказать монтаж мультизональных систем" dialogTitle="Монтаж мультизональных систем RMX, VRV" dialogDesc="После отправки формы мы получим вашу заявку на монтаж мультизональных систем RMX, VRV. Мы свяжемся с Вами в ближайшее время." />

          {/* Дополнительные работы и опции */}
          <section id="more-options" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Дополнительные работы и опции</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Опция</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Установка зимнего комплекта для on-off моделей<br/>(подогрев картера, регулятор давления конденсации) с оборудованием и материалами</td>
                  <td className="py-2 px-4 border-b">9500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Установка блока ротации проводного (только работа)</td>
                  <td className="py-2 px-4 border-b">7500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Установка блока ротации без проводного (только работа)</td>
                  <td className="py-2 px-4 border-b">10000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Установка проводного пульта, ИК приемника сигнала (только работа)</td>
                  <td className="py-2 px-4 border-b">+ 900 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Нестандартное крепление наружного блока (на ограждение балкона или через теплоизоляцию стены)</td>
                  <td className="py-2 px-4 border-b">+ 1500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Нестандартное крепление наружного блока (на керамический вентилируемый фасад)</td>
                  <td className="py-2 px-4 border-b">+ 2000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Дозаправка фреоном. Цена за 1 грамм При стоимости заправки менее 3000 руб.<br/>взымается дополнительная плата за работу по заправке сплит-системы в размере 1500 руб. </td>
                  <td className="py-2 px-4 border-b">8 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Перевальцовка соединения за сторону1/4,3/8 / 1/4,1/2 / 1/4,5/8 / 3/8,5/8 / 3/8,3/4</td>
                  <td className="py-2 px-4 border-b">1500/1700/1800/2200/2500</td>
                </tr>
              </tbody>
            </table>
          </section>
          <ServiceButton buttonTitle="Заказать дополнительные работы и опции" dialogTitle="Дополнительные работы и опции" dialogDesc="После отправки формы мы получим вашу заявку на дополнительные работы и опции. Мы свяжемся с Вами в ближайшее время." />

          {/* Межблочная трасса */}
          <section id="interconnect-line" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Межблочная трасса</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Услуга</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка трассы 6,35/9,52 мм. без короба<br/>((трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с трассой) , за м.п.</td>
                  <td className="py-2 px-4 border-b">1500 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка трассы 6,35/12,70 мм свыше 5-ти м.п. без короба<br/>(трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с трассой), за м.п.</td>
                  <td className="py-2 px-4 border-b">1600 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка трассы 6,35/15,88 мм свыше 5-ти м.п. без короба<br/>(трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с трассой), за м.п.</td>
                  <td className="py-2 px-4 border-b">1800 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка трассы 9,52/15,88 мм свыше 5-ти м.п. без короба<br/>(трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с трассой), за м.п.</td>
                  <td className="py-2 px-4 border-b">2000 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка трассы 9,52/19,05 мм свыше 5-ти м.п. без короба<br/>(трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с трассой), за м.п.</td>
                  <td className="py-2 px-4 border-b">2200 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка трассы 12,70/19,05 мм свыше 5-ти м.п. без короба<br/>(трубопроводы, теплоизоляция; межблочный кабель, дренаж вместе с трассой), за м.п.</td>
                  <td className="py-2 px-4 border-b">2600 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка трассы 15,88/28,58 мм свыше 5-ти м.п. без короба (трубопроводы, теплоизоляция; межблочный кабель), за м.п.</td>
                  <td className="py-2 px-4 border-b">3200 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка дополнительного пластикового короба под трассу 55х75, за м.п.</td>
                  <td className="py-2 px-4 border-b">1000 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Элемент фурнитуры 55х75</td>
                  <td className="py-2 px-4 border-b">350 руб. шт.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Пайка медного трубопровода (d=6,35 - 12,70 мм)</td>
                  <td className="py-2 px-4 border-b">500 руб./точка</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Пайка медного трубопровода (d=15,88 - 19,05 мм)</td>
                  <td className="py-2 px-4 border-b">600 руб./пайка</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Пайка медного трубопровода (d=25,40 - 34,92 мм)</td>
                  <td className="py-2 px-4 border-b">700 руб./пайка</td>
                </tr>
              </tbody>
            </table>
          </section>
          <ServiceButton buttonTitle="Заказать прокладку трассы.." dialogTitle="Межблочная трасса" dialogDesc="После отправки формы мы получим вашу заявку на прокладку трассы и др.. Мы свяжемся с Вами в ближайшее время." />

          {/* Дренаж */}
          <section id="drenazh" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Дренаж</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Услуга</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Установка дренажной помпы встроенной</td>
                  <td className="py-2 px-4 border-b">3000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Установка дренажной помпы накладной</td>
                  <td className="py-2 px-4 border-b">2500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Установка дренажной помпы наливной</td>
                  <td className="py-2 px-4 border-b">2500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка дренажного шланга d=16 мм отдельно от трассы без короба, за 1 м.п.</td>
                  <td className="py-2 px-4 border-b">250 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка капиллярной трубки d=6/9 мм (для помпы), в ПНД гофре за 1 м.п.</td>
                  <td className="py-2 px-4 border-b">250 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Пластиковый короб 30х30/25 для прокладки дренажного шланга, капиллярной трубки (дополнительно к стоимости 1 м.п. дренажа без короба), за 1 м.п.</td>
                  <td className="py-2 px-4 border-b">+250 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка труб PPRC (d=16-32) за 1 м.п. только работа</td>
                  <td className="py-2 px-4 border-b">250 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж оборудования на высоте от 3-х до 6-ми метров с лестницы</td>
                  <td className="py-2 px-4 border-b">х 1,15 на выполняемый работы</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж оборудования на высоте от 6-ми метров</td>
                  <td className="py-2 px-4 border-b">х 1,35 на выполняемый работы</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p className="text-sm text-gray-500 mb-2 mt-2">* Стоимость монтажа будет дороже на 2000 рублей в случае, если производится монтаж оборудования, купленного не у нас.</p>
          <ServiceButton buttonTitle="Заказать дренаж" dialogTitle="Дренаж" dialogDesc="После отправки формы мы получим вашу заявку на дренаж. Мы свяжемся с Вами в ближайшее время." />

          {/* Электромонтаж */}
          <section id="electro" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Электромонтаж</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Услуга</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Прокладка кабеля (3х1,5; 3х2,5; 5х1,5) в гофротрубе, коробе за м.п., только работа</td>
                  <td className="py-2 px-4 border-b">150 руб./м.п.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Установка автомата защиты в щит с подключением, только работа.</td>
                  <td className="py-2 px-4 border-b">500 руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p className="text-sm text-gray-500 mb-2 mt-2">* Стоимость монтажа будет дороже на 2000 рублей в случае, если производится монтаж оборудования, купленного не у нас.</p>
          <ServiceButton buttonTitle="Заказать электромонтаж" dialogTitle="Электромонтаж" dialogDesc="После отправки формы мы получим вашу заявку на электромонтаж. Мы свяжемся с Вами в ближайшее время." />

          {/* Общестроительные работы */}
          <section id="general-works" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Общестроительные работы</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Услуга</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Дополнительное отверстие под трубопроводы (гипсокартон, ацеит и т.п.)</td>
                  <td className="py-2 px-4 border-b">500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Дополнительное отверстие под трубопроводы (кирпич, дерево, листовой металл), сверление производится алмазной коронкой</td>
                  <td className="py-2 px-4 border-b">1000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Дополнительное отверстие под трубопроводы (бетон)</td>
                  <td className="py-2 px-4 border-b">1000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Дополнительное отверстие под кабель</td>
                  <td className="py-2 px-4 border-b">200 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Штробление под трубопроводы (пеноблок/кирпич), за 1 м.п.</td>
                  <td className="py-2 px-4 border-b">1000/1200 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Штробление под трубопроводы (бетон), за 1 м.п.</td>
                  <td className="py-2 px-4 border-b">2000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Штробление под трубопроводы (плита, панель), за 1 м.п.</td>
                  <td className="py-2 px-4 border-b">2500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Штробление под кабель, дренаж, за 1 м.п. пеноблок/кирпич/бетон/плита</td>
                  <td className="py-2 px-4 border-b">600/800/1000/1300 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Алмазное бурение (d=100 - 400)</td>
                  <td className="py-2 px-4 border-b">От 5000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Проход фреоновых коммуникаций сквозь кровлю (с герметизацией отверстия)</td>
                  <td className="py-2 px-4 border-b">От 4000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Сборка/разборка подвесного потолка, за 1 м2</td>
                  <td className="py-2 px-4 border-b">300 руб./м2</td>
                </tr>
              </tbody>
            </table>
          </section>
          <ServiceButton buttonTitle="Заказать общестроительные работы" dialogTitle="Общестроительные работы" dialogDesc="После отправки формы мы получим вашу заявку на общестроительные работы. Мы свяжемся с Вами в ближайшее время." />

          {/* Металлоконструкции */}
          <section id="drenazh" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Металлоконструкции</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Услуга</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Установка защитного козырька</td>
                  <td className="py-2 px-4 border-b">От 2000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Установка антивандальной защиты</td>
                  <td className="py-2 px-4 border-b">От 3500 руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <ServiceButton buttonTitle="Заказать работы с металлоконструкцией" dialogTitle="Металлоконструкции" dialogDesc="После отправки формы мы получим вашу заявку на работы с металлоконструкцией. Мы свяжемся с Вами в ближайшее время." />

          {/* Высотные работы */}
          <section id="high-work" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Высотные работы</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Услуга</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Сборка/разборка/доставка строительных лесов (до 6-ти м.)</td>
                  <td className="py-2 px-4 border-b">4500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Альпинист (1 наружный блок) - по индивидуальному расчету</td>
                  <td className="py-2 px-4 border-b">От 12000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Автовышка, высота до 18 м (смена 7 часов работы)</td>
                  <td className="py-2 px-4 border-b">От 16000 руб./смена</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж оборудования на высоте от 3-х до 6-ми метров с лестницы</td>
                  <td className="py-2 px-4 border-b">х 1,15 на выполняемый работы</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж оборудования на высоте от 6-ми метров</td>
                  <td className="py-2 px-4 border-b">х 1,35 на выполняемый работы</td>
                </tr>
              </tbody>
            </table>
          </section>
          <p className="text-sm text-gray-500 mb-2 mt-2">* Стоимость монтажа будет дороже на 2000 рублей в случае, если производится монтаж оборудования, купленного не у нас.</p>
          <ServiceButton buttonTitle="Заказать высотные работы" dialogTitle="Высотные работы" dialogDesc="После отправки формы мы получим вашу заявку на высотные работы. Мы свяжемся с Вами в ближайшее время." />

          <section id="dismantling-work" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Демонтажные работы</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Услуга</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Демонтаж внутреннего/наружного блоков мощностью до 3 кВт (соотношение работ - 40% / 60%)</td>
                  <td className="py-2 px-4 border-b">5000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Демонтаж внутреннего/наружного блоков мощностью от 3 кВт до 45 кВт (соотношение работ - 40% / 60%)</td>
                  <td className="py-2 px-4 border-b">6000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Демонтаж внутреннего/наружного блоков мощностью от 45 кВт до 70 кВт (соотношение работ - 40% / 60%)</td>
                  <td className="py-2 px-4 border-b">7000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Демонтаж внутреннего/наружного блоков мощностью от 70 кВт до 100 кВт (соотношение работ - 40% / 60%)</td>
                  <td className="py-2 px-4 border-b">9000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Демонтаж внутреннего/наружного блоков мощностью от 100 кВт до 140 кВт (соотношение работ - 40% / 60%)</td>
                  <td className="py-2 px-4 border-b">11000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Демонтаж внутреннего/наружного блоков мощностью от 140 кВт до 180 кВт (соотношение работ - 35% / 65%)</td>
                  <td className="py-2 px-4 border-b">13000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Демонтаж внутреннего/наружного блоков кондиционера 100 (Q0=22-29 кВт) (60/40%)</td>
                  <td className="py-2 px-4 border-b">10000 / 13000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Демонтаж внутреннего/наружного блоков кондиционера 125 (Q0=29-34 кВт) (60/40%)</td>
                  <td className="py-2 px-4 border-b">12000 / 15000 руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <ServiceButton buttonTitle="Заказать демонтажные работы" dialogTitle="Демонтажные работы" dialogDesc="После отправки формы мы получим вашу заявку на демонтажные работы. Мы свяжемся с Вами в ближайшее время." />

          {/* Сервисные работы */}
          <section id="service-work" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Сервисные работы</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Услуга</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Выезд на объект сервисной бригады (включая 2 часа работы по диагностике 1 единицы техники и мелкому ремонту не требующему зап. частей)</td>
                  <td className="py-2 px-4 border-b">3000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Обслуживание сплит-системы 2 – 25 кВт: настенная</td>
                  <td className="py-2 px-4 border-b">4000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Обслуживание сплит-системы 35 кВт: настенная/кассетная</td>
                  <td className="py-2 px-4 border-b">4500/4800 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Обслуживание сплит-системы 55 кВт: настенная/кассетная/напольно-потолочная/колонная/канальная</td>
                  <td className="py-2 px-4 border-b">5300/5800/<br/>5900/5900/5900 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Обслуживание сплит-системы 7-9 кВт: настенная/кассетная/напольно-потолочная/колонная/канальная</td>
                  <td className="py-2 px-4 border-b">6300/6800/<br/>6900/6900/6900 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Обслуживание сплит-системы 10-11 кВт: настенная/кассетная/напольно-потолочная/колонная/канальная</td>
                  <td className="py-2 px-4 border-b">7000/7500/<br/>7800/7800/7800 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Разовое ТО настенной/кассетной/напольно-потолочной канальной сплит-системы (свыше 110 кВт)</td>
                  <td className="py-2 px-4 border-b">+ 300 руб./кВт</td>
                </tr>
              </tbody>
            </table>
          </section>
          <ServiceButton buttonTitle="Заказать сервисные работы" dialogTitle="Сервисные работы" dialogDesc="После отправки формы мы получим вашу заявку на сервисные работы. Мы свяжемся с Вами в ближайшее время." />

          <section id="other-expenses" className="mb-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Транспортные и другие расходы</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Услуга</th>
                  <th className="py-2 px-4 border-b">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Выезд монтажной бригады за пределы Раменского свыше 15 км</td>
                  <td className="py-2 px-4 border-b">+ 50 руб./1 км</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Выезд монтажной бригады в Москву</td>
                  <td className="py-2 px-4 border-b">1500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Ложный выезд монтажной бригады на объект</td>
                  <td className="py-2 px-4 border-b">3500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Вынужденный простой монтажной бригады (за час)</td>
                  <td className="py-2 px-4 border-b">2000 руб./час</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Подъем оборудования (инструмента) без лифта (только за наружные блоки) цена за каждый наружный блок (за комплект инструментов)</td>
                  <td className="py-2 px-4 border-b">300 руб./этаж</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Транспортировка (перевозка оборудования клиента в сервис-центр и обратно)</td>
                  <td className="py-2 px-4 border-b">от 1500 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Выезд технического специалиста для консультаций обмеров разметки</td>
                  <td className="py-2 px-4 border-b">от 1000 руб. (при заказе бесплатно вычитается при оплате заказа)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Прорисовка штроб на объекте для рабочих Заказчика за единицу</td>
                  <td className="py-2 px-4 border-b">1000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Минимальная стоимость работы монтажной бригады из 2-х чел (за час)</td>
                  <td className="py-2 px-4 border-b">2000 руб./час</td>
                </tr>
              </tbody>
            </table>
          </section>
          <ServiceButton buttonTitle="Транспортные и другие расходы" dialogTitle="Транспортные и другие расходы" dialogDesc="После отправки формы мы получим вашу заявку на транспортные и другие расходы. Мы свяжемся с Вами в ближайшее время." />
      </div>
    );
}

export default Service;