import Card from "./card/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CatalogCard = () => {
    return (
        <div>
            <ul className="block gap-x-2 mb-2 lg:flex justify-between">
                <Card 
                    title="Бытовые сплит-системы" 
                    desc="Инверторные сплит-системы, cплит-системы постоянной производительности" 
                    href="/catalog/home-split-systems"
                    imageSrc="/homesplitbg.png" 
                />
                <Card 
                    title="Мультисплит-системы" 
                    desc="Инверторные мультисплит-системы" 
                    href="/catalog/multi-split-systems"
                    imageSrc="/multisplitbg.png"
                />
            </ul>
            <ul className="block gap-x-2 mb-2 lg:flex justify-between">
                <Card 
                    title="Инверторные коммерческие сплит-системы" 
                    desc="Инверторные кассетные сплит-системы, инверторные канальные сплит-системы, инверторные  напольно-потолочные сплит-системы" 
                    href="/catalog/inverter-commercial"
                    imageSrc="/bg.png"
                />
                <Card 
                    title="Коммерческие сплит-системы" 
                    desc="Кассетные сплит-системы, канальные сплит-системы, напольно-потолочные сплит-системы" 
                    href="/catalog/commercial-split-systems"
                    imageSrc="/bg2.png"
                />
            </ul>
            <ul className="block gap-x-2 mb-2">
                <li className="w-full lg:w-[1336px] mb-2 relative">
                    <Link href="/catalog/refrigeration-equipment">
                        <div className="block w-full md:h-[290px] sm:h-[500px] rounded-xl p-7 bg-[#f9fafc]">
                            <div className="block md:flex md:justify-between">
                                <div className="flex-1 pr-8">
                                    <h2 className="text-2xl font-semibold md:text-3xl">Холодильное оборудование</h2>
                                    <p className="text-[18px] mb-2 font-medium text-gray-500 w-1/2 mt-3 line-clamp-3">
                                        Сплит-системы Belluna - решение любых ваших задач по охлаждению и заморозки продукции
                                    </p>
                                </div>
                                <div className="block">
                                    <Image
                                        src="/frostbg.png"
                                        alt="Belluna"
                                        width={300}
                                        height={250}
                                        className="rounded-xl" // Добавьте скругление краев, если необходимо
                                    />
                                </div>
                            </div>
                            <Button className="absolute bottom-0 mb-7" variant={"default"}>Подробнее</Button>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default CatalogCard;