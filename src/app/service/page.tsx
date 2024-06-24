const Service = () => {
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Прайс-лист на работы по монтажу кондиционеров</h1>

          {/* Настенные сплит-системы (стандартный монтаж) */}
          <section className="mb-8">
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
            <h2 className="text-xl font-semibold mb-2">Настенные сплит-системы (стандартный монтаж)</h2>
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
                  <td className="py-2 px-4 border-b">12000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж настенного кондиционера 12 (D труб=6.35/12.70мм) (Q0=3.5-4.5 кВт)</td>
                  <td className="py-2 px-4 border-b">14000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж настенного кондиционера 18 (D труб=6.35/12.70мм) (Q0=4.5-6.0 кВт)</td>
                  <td className="py-2 px-4 border-b">16000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж настенного кондиционера 24 (D труб=6.35/15.88мм) (Q0=6.0-8.1 кВт)</td>
                  <td className="py-2 px-4 border-b">20000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж настенного кондиционера 36 (D труб=9.52/15.88мм) (Q0=9.0-10.1 кВт)</td>
                  <td className="py-2 px-4 border-b">28000 руб.</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Полупромышленные сплит-системы */}
          <section className="mb-8">
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
                  <td className="py-2 px-4 border-b">8000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 18 (D труб=6.35/12.70мм) (Q0=4.5-6.0 кВт)</td>
                  <td className="py-2 px-4 border-b">10000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 24 (D труб=6.35/15.88мм) (Q0=6.0-8.1 кВт)</td>
                  <td className="py-2 px-4 border-b">12000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 28-36 (D труб=9.52/15.88мм) (Q0=8.1-11 кВт)</td>
                  <td className="py-2 px-4 border-b">14000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 48 (D труб=9.52/19.05мм) (Q0=11-15 кВт)</td>
                  <td className="py-2 px-4 border-b">16000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 54-60 (D труб=12.70/19.05мм) (Q0=15-18 кВт)</td>
                  <td className="py-2 px-4 border-b">19000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 75 (D труб=12.70/19.05мм) (Q0=18-22 кВт)</td>
                  <td className="py-2 px-4 border-b">24000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 100 (D труб=15.88/28.58мм) (Q0=22-29 кВт)</td>
                  <td className="py-2 px-4 border-b">30000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Монтаж полупромышленного кондиционера 125 (D труб=15.88/34.92мм) (Q0=29-34 кВт)</td>
                  <td className="py-2 px-4 border-b">35000 руб.</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Мульти-сплит системы */}
          <section className="mb-8">
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
                  <td className="py-2 px-4 border-b">17000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Мульти-сплит системы (3 блока)</td>
                  <td className="py-2 px-4 border-b">20000 руб.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Мульти-сплит системы (4 блока)</td>
                  <td className="py-2 px-4 border-b">24000 руб.</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Дренаж */}
          <section className="mb-8">
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

          <section className="mb-8">
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

          {/* Сервисные работы */}
          <section className="mb-8">
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

          <section className="mb-8">
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
      </div>
    );
}

export default Service;