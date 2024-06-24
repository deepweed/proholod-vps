import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: `404`
  }
}

export default function NotFound() {
    return (
      <div className="flex flex-col items-center">
        <p className="text-[96px] font-bold text-blue-600 mt-4">404</p>
        <p className="font-medium text-gray-600 w-1/2 text-center mx-auto mb-3">К сожалению, страницы по этому адресу не существует. Желаете вернуться на главную страницу?</p>
        <Button variant="default" asChild>
          <Link href="/">На главную</Link>
        </Button>
      </div>

    );
  }