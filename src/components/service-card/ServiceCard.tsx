import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
    title: string;
    desc: string;
    href: string;
}

const ServiceCard = ({title, desc, href}: ServiceCardProps) => {
    return (
        <Link href={href}>
            <div className="w-full mb-2 lg:w-[660px] h-[600px] lg:h-[700px] rounded-xl p-7 bg-[#f9fafc] cursor-pointer relative">
            <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
                <p className="text-[18px] font-medium text-gray-500 w-3/4 mt-3 line-clamp-4">
                    {desc}
                </p>
                <Button className="absolute bottom-0 mb-7" variant={"blue"}>К услугам</Button>
            </div>
        </Link>
    );
}

export default ServiceCard;