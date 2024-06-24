import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CardProps {
    title: string;
    desc: string;
    href: string;
    imageSrc: string;
}

const Card = ({title, desc, href, imageSrc}: CardProps) => {
    return (
        <li className="w-full mb-2 lg:w-[690px] md:h-[290px] sm:h-[500px] rounded-xl p-7 bg-[#f9fafc] cursor-pointer relative">
            <Link href={href}>
                <article className="block md:flex md:justify-between">
                    <div className="flex-1 pr-8">
                        <div>
                            <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
                            <p className="text-[18px] font-medium text-gray-500 mt-3 line-clamp-3 md:line-clamp-2 ">
                                {desc}
                            </p>
                            <Button className="absolute bottom-0 mb-7" variant={"default"}>Подробнее</Button>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:flex justify-end">
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={300}
                            height={220}
                            className="rounded-xl" // Добавьте скругление краев, если необходимо
                        />
                    </div>
                </article>
            </Link>
        </li>
    );
}

export default Card;