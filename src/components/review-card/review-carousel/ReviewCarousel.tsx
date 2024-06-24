import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCard from "../ReviewCard";
import { Card, CardContent } from "@/components/ui/card"


const ReviewCarousel = () => {
    const avitoLink = "https://www.avito.ru/user/005c69fd8dd76d30c503c0f0183fe73e/profile";

    return (
        <>
        <Carousel>
            <CarouselContent className="flex gap-x-14">
                <CarouselItem className="mr-48 md:mr-12 lg:mr-6 basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4">
                    <div className="mr-28 md:mr-4">
                        <ReviewCard userName="Иван" 
                            userReview="В компании про холод заказывал кондиционер с монтажом в частном доме, долго выбирал кондиционер не мог определиться, спасибо менеджерам за профессиональную консультацию. Выбрали хороший качественный Dahaci. Монтаж также заказал у ребят. Бригада отличная, все быстро, аккуратно, качественно. По цене как обговаривали, столько и заплатил. Никаких допов, как часто бывает, ничего не навешивали. Вообщем, все отлично"
                            reviewFrom="Яндекс.Карты"
                            reviewLink="https://yandex.com/maps/org/prokholod/142837393055/reviews"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="mr-48 md:mr-12 lg:mr-4 basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4">
                    <div className="mr-4">
                        <ReviewCard userName="Альбина" 
                            userReview="Огромную благодарность хотим выразить Денису, у нас был очень не простой случай и много нюансов по установки кондиционера, всю работу произвел быстро,качественно и что не мало важно чисто! Так же очень порадовала цена!!! 
                            Профессиональный подход к своему делу, спасибо за монтаж!"
                            reviewFrom="Яндекс.Карты"
                            reviewLink="https://yandex.com/maps/org/prokholod/142837393055/reviews"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="mr-48 md:mr-12 lg:mr-4 basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4">
                    <div className="mr-4">
                        <ReviewCard userName="Ольга" 
                            userReview="Я в восторге от мастеров Дениса и Николая. Работу сделали быстро, аккуратно, чисто. Цена и качество на высоте. Рекомендую"
                            reviewFrom="Яндекс.Карты"
                            reviewLink="https://yandex.com/maps/org/prokholod/142837393055/reviews"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="mr-48 md:mr-12 lg:mr-4 basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4">
                    <div className="mr-4">
                        <ReviewCard userName="Никита" 
                            userReview="Долго выбирал между монтажниками сплит-систем в г.о. Раменское и в итоге остановил свой выбор на эту фирму и не пожалел. Помимо дистанционного согласования работ (если вы грамотно опишите план работ) и гибкого ценообразования я получил качественный и оперативный  монтаж. Ребята приехали, определились с работами уже на месте, смонтировали, провели проверку системы, убрались за собой. Вопросов к ним не было. Спасибо Вам!"
                            reviewFrom="Авито"
                            reviewLink={avitoLink}
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="mr-48 md:mr-12 lg:mr-4 basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4">
                    <div className="mr-4">
                        <ReviewCard userName="Михаил" 
                            userReview="Всё отлично, ребята молодцы. Всё сделали быстро)) Спасибо за провод)"
                            reviewFrom="Авито"
                            reviewLink={avitoLink}
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="mr-48 md:mr-12 lg:mr-4 basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4">
                    <div className="mr-4">
                        <ReviewCard userName="Татьяна" 
                            userReview="Нашли окно для меня в своем занятом графике, получилось очень быстро, работу выполнялась очень аккуратно так что даже соседи были довольны, за собой убрали, и проконсультировали по всем имеющимся вопросам, благодрна."
                            reviewFrom="Яндекс.Карты"
                            reviewLink="https://yandex.com/maps/org/prokholod/142837393055/reviews"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="mr-48 md:mr-12 lg:mr-4 basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4">
                    <div className="mr-4">
                        <ReviewCard userName="Екатерина" 
                            userReview="Все отлично. Ребята приехали, повесили, подключили и проверили кондиционер. Работали аккуратно, нареканий никаких нет. Даже гарантийный талон на свои работы выписали."
                            reviewFrom="Авито"
                            reviewLink={avitoLink}
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="mr-48 md:mr-12 lg:mr-4 basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4">
                    <div className="mr-4">
                        <ReviewCard userName="Юрий" 
                            userReview="Ребята просто молодцы! Приехали вовремя, установили кондиционер быстро и красиво. Все четко работает! Рекомендую!"
                            reviewFrom="Авито"
                            reviewLink={avitoLink}
                        />
                    </div>
                </CarouselItem>
                <CarouselItem className="mr-48 md:mr-12 lg:mr-4 basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-1/3 xl:basis-1/4">
                    <div className="mr-4">
                        <ReviewCard userName="Елена" 
                            userReview="Обращались в эту компанию, они установили нам два кондиционера, предварительно проконсультировали, помогли выбрать подходящие под наш запрос. Работу сделали аккуратно, все в срок. По стоимости - все как объявили предварительно, никаких скрытых платежей. Спасибо Денису и команде, мы остались довольны!"
                            reviewFrom="Яндекс.Карты"
                            reviewLink="https://yandex.com/maps/org/prokholod/142837393055/reviews"
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
            <div className="hidden lg:block">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
        <p className="mt-2 text-center text-gray-500 font-medium text-[12px] block lg:hidden">Листайте вправо-влево</p>
        </>
    );
}

export default ReviewCarousel;