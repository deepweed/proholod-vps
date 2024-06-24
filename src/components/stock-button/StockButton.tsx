import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const StockButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="mb-5 w-full h-[50px] md:w-[200px]" variant="default">Нет в наличии</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <p className="mt-3 mb-3">К сожалению, данного товара нет в наличии. Мы приносим извинения за неудобство. Это может быть связано с временными проблемами с поставками или высоким спросом на данный товар.</p>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default StockButton;