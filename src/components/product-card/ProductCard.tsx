import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

interface ProductProps {
    title: string;
    brand: string;
    series: string;
    cost: string;
    image: string;
    link: string;
    isInStock: boolean;
}

const ProductCard = ({title, brand, series, cost, image, link, isInStock}: ProductProps) => {
    return (
        <Link href={link}>
            <div className="w-full h-[370px] bg-[#f9fafc] rounded-xl md:w-[245px] lg:w-[250px] flex flex-col p-4">
                <div className="flex items-center justify-center h-full">
                    <Image className="flex justify-center" src={image} width={190} height={190} alt={title}/>
                </div>
                <p className="text-[12px] font-semibold mb-2 mt-2">{title}</p>
                <p className="text-gray-500 text-[14px]">Бренд: <span className="text-black font-semibold">{brand}</span></p>
                <p className="text-gray-500 text-[14px] mb-2">Серия: <span className="text-black font-semibold">{series.length > 20 ? (series.substring(0, 20) + "...") : (series)}</span></p>
                {isInStock ? (
                    <p className="text-xl font-semibold text-blue-700 mb-2">{cost}</p>
                ) : (
                    <p className="text-base font-semibold text-blue-700 mb-2">Нет в наличии</p>
                )}
                <Button variant={"default"}>Детали</Button>
            </div>
        </Link>
    );
}

export default ProductCard;