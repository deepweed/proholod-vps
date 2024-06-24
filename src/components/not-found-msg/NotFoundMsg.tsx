import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundMsg = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-40">
            <h2 className="text-2xl font-semibold">Ничего нет</h2>
            <p className="text-sm text-gray-500 mt-1">К сожалению, на сегодняшний день по заданным параметрам ничего не найдено.</p>
            <Button className="mt-5" variant={'blue'} asChild>
                <Link href="/catalog">Обратно в каталог</Link>
            </Button>
        </div>
    );
}

export default NotFoundMsg;