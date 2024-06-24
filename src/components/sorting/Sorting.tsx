"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SeriesSelector from "./SeriesProps";
import { Input } from "@/components/ui/input";

interface Filters {
  category: string;
  sort: string;
  brand: string;
  series: string;
  minPrice: string;
  maxPrice: string;
  isInventor: string;
  maxQuadrants: string;
  minQuadrants: string;
}

const Sorting: React.FC = () => {
  const router = useRouter();

  const [filters, setFilters] = useState<Filters>({
    category: '',
    sort: '',
    brand: '',
    series: '',
    minPrice: '',
    maxPrice: '',
    isInventor: '',
    maxQuadrants: '',
    minQuadrants: ''
  });

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const createQueryParams = (filters: Filters): URLSearchParams => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    return params;
  };

  const handleSubmit = () => {
    const query = createQueryParams(filters).toString();
    console.log('Query:', query);
    router.push(`/catalog?${query}`);
  };

  return (
    <>
      <div className="block lg:flex">
        <div className="mr-2">
          <Select onValueChange={(value) => handleFilterChange('category', value)}>
            <SelectTrigger className="w-full mb-2 lg:w-[280px]">
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="home-split-systems">Бытовые сплит-системы</SelectItem>
                <SelectItem value="multi-split-systems">Мультисплит-системы</SelectItem>
                <SelectItem value="inverter-commercial">Инверторные коммерческие сплит-системы</SelectItem>
                <SelectItem value="commercial-split-systems">Коммерческие сплит-системы</SelectItem>
                <SelectItem value="refrigeration-equipment">Холодильное оборудование</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mr-2">
          <Select onValueChange={(value) => handleFilterChange('sort', value)}>
            <SelectTrigger className="w-full mb-2 lg:w-[280px]">
              <SelectValue placeholder="Сортировать по.." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="max-price">Возрастанию цены</SelectItem>
                <SelectItem value="min-price">Убыванию цены</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mr-2">
          <Select onValueChange={(value) => handleFilterChange('brand', value)}>
            <SelectTrigger className="w-full mb-2 lg:w-[280px]">
              <SelectValue placeholder="Бренд" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Dahaci">Dahaci</SelectItem>
                <SelectItem value="Fujitsu">Fujitsu</SelectItem>
                <SelectItem value="Lessar">Lessar</SelectItem>
                <SelectItem value="QuattroClima">Quattroclima</SelectItem>
                <SelectItem value="Tosot">Tosot</SelectItem>
                <SelectItem value="Belluna">Belluna</SelectItem>
                <SelectItem value="Бирюса">Бирюса</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mr-2">
          <Select onValueChange={(value) => handleFilterChange('series', value)}>
            <SelectTrigger className="w-full mb-2 lg:w-[280px]">
              <SelectValue placeholder="Серия" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/*<SeriesSelector categories={['belluna']} onValueChange={(value) => handleFilterChange('series', value)} />*/}
                <SelectItem value="Lanterna">QuattroClima Lanterna</SelectItem>
                <SelectItem value="NiceME">Dahaci NiceME</SelectItem>
                <SelectItem value="FreshME">Dahaci FreshME</SelectItem>
                <SelectItem value="CoolPlus">Lessar Cool+</SelectItem>
                <SelectItem value="CoolPlusR32">Lessar Cool+ R32</SelectItem>
                <SelectItem value="Flexcool">Lessar Flexcool</SelectItem>
                <SelectItem value="FlexcoolNEW">Lessar Flexcool New</SelectItem>
                <SelectItem value="TigerNEW">Lessar Tiger New</SelectItem>
                <SelectItem value="Natal">Natal</SelectItem>
                <SelectItem value="NatalNew">Natal New</SelectItem>
                <SelectItem value="Bergamo">QuattroClima Bergamo</SelectItem>
                <SelectItem value="Sirocco">QuattroClima Sirocco</SelectItem>
                <SelectItem value="Vento">QuattroClima Vento</SelectItem>
                <SelectItem value="Vittoria">QuattroClima Vittoria</SelectItem>
                <SelectItem value="Sirocco">QuattroClima Sirocco</SelectItem>
                <SelectItem value="Capri">QuattroClima Capri</SelectItem>
                <SelectItem value="Clarios">Fujitsu Clarios</SelectItem>
                <SelectItem value="Genios">Fujitsu Genios</SelectItem>
                <SelectItem value="Capri">Capri</SelectItem>
                <SelectItem value="Interios">Interios</SelectItem>
                <SelectItem value="Ego">Lessar Ego</SelectItem>
                <SelectItem value="Enigma">Lessar Enigma</SelectItem>
                <SelectItem value="Amigo">Lessar Amigo</SelectItem>
                <SelectItem value="FlexCool">FlexCool</SelectItem>
                <SelectItem value="Safari">Бирюса Safari</SelectItem>
                <SelectItem value="Aurora">Бирюса Aurora</SelectItem>
                <SelectItem value="Econom">Belluna Эконом</SelectItem>
                <SelectItem value="Universal">Belluna Универсал</SelectItem>
                <SelectItem value="Blackslim">Belluna BLACKSLIM</SelectItem>
                <SelectItem value="Frost">Belluna ФРОСТ</SelectItem>
                <SelectItem value="InvertorProfi">Belluna ИНВЕРТОР-ПРОФИ</SelectItem>
                <SelectItem value="InvertorLux">Belluna ИНВЕРТОР-ЛЮКС</SelectItem>
                <SelectItem value="Внутренние блоки настенного типа">Внутренние блоки настенного типа</SelectItem>
                <SelectItem value="Внутренние блоки настенного типа R32">Внутренние блоки настенного типа R32</SelectItem>
                <SelectItem value="Блок канального типа узкопрофильный">Внутренние блоки кассетного типа компактные</SelectItem>
                <SelectItem value="Наружные блоки мультисплит-систем Inverter R32 для 2-5 помещений">Наружные блоки мультисплит-систем Inverter R32</SelectItem>
                <SelectItem value="Внутренние блоки канального типа eMagic Inverter">Внутренние блоки канального типа eMagic Inverter</SelectItem>
                <SelectItem value="Инверторные наружные блоки eMagic Inverter">Инверторные наружные блоки eMagic Inverter</SelectItem>
                <SelectItem value="Внутренние блоки настенного типа Cool+">Внутренние блоки настенного типа Cool+</SelectItem>
                <SelectItem value="Внутренние блоки настенного типа серии Lyra X">Внутренние блоки настенного типа серии Lyra X</SelectItem>
                <SelectItem value="Внутренние блоки настенного типа Flexcool">Внутренние блоки настенного типа Flexcool</SelectItem>
                <SelectItem value="Инверторные кассетные сплит-системы R32">Инверторные кассетные сплит-системы R32</SelectItem>
                <SelectItem value="Инверторные кассетные сплит-системы">Инверторные кассетные сплит-системы</SelectItem>
                <SelectItem value="Инверторные канальные сплит-системы">Инверторные канальные сплит-системы</SelectItem>
                <SelectItem value="Инверторные напольно-потолочные сплит-системы">Инверторные напольно-потолочные сплит-системы</SelectItem>
                <SelectItem value="Кассетные сплит-системы постоянной производительности">Кассетные сплит-системы постоянной производительности</SelectItem>
                <SelectItem value="Канальные сплит-системы постоянной производительности">Канальные сплит-системы постоянной производительности</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="block lg:flex">
        <div className="mr-2">
          <Select onValueChange={(value) => handleFilterChange('isInventor', value)}>
            <SelectTrigger className="w-full mb-2 lg:w-[280px]">
              <SelectValue placeholder="Инвертор?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="true">Да</SelectItem>
                <SelectItem value="false">Нет</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full items-center mb-3 lg:w-[400px] mr-2">
          <Input type="text" placeholder="Мин. цена, ₽" onChange={(e) => handleFilterChange('minPrice', e.target.value)} />
          <span className="text-gray-500 mr-1 ml-1">-</span>
          <Input type="text" placeholder="Макс. цена, ₽" onChange={(e) => handleFilterChange('maxPrice', e.target.value)} />
        </div>
      </div>
      <div>
        <Button className="mr-2" onClick={handleSubmit} variant={"blue"}>Применить фильтр</Button>
        <Button onClick={() => router.push("/catalog")} variant={"blue"}>Сбросить фильтр</Button>
      </div>
    </>
  );
}

export default Sorting;
