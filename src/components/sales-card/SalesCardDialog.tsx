import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "../ui/button";

interface SalesCardDialogInterface{
    title: string;
    description: string;
    dialogDesc?: string;
}

const SalesCardDialog = ({title, description, dialogDesc}: SalesCardDialogInterface) => {
    return (
        <Link href="/catalog">
            <div className="w-full h-auto bg-[#f9fafc] rounded-xl flex flex-col p-7">
                <p className="text-2xl font-bold mb-2 mt-2">{title}</p>
                <p className="text-gray-500 text-base font-medium mb-2">{description}</p>
                <p className="text-blue-700 text-base font-medium mb-5">{dialogDesc}</p>
                <Button className="w-[200px]" variant={"default"}>В каталог</Button>
            </div>
        </Link>
    );
}

export default SalesCardDialog;