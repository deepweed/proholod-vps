import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const links = [
        { label: "О компании", href: "/about"},
        { label: "Каталог", href: "/catalog"},
        { label: "Контакты", href: "/contact"},
        { label: "Гарантийное обслуживание", href: "/guarantee-service"},
        { label: "Политика конфиденциальности", href: "/privacy-policy"},
    ];

    const vkLink = "https://vk.com/proholodpro";
    const yandexLink = "https://yandex.com/maps/org/prokholod/142837393055";
    const avitoLink = "https://www.avito.ru/brands/i374297878";

    return (
        <footer className="container mx-auto mb-5 mt-5 bottom-0 w-full">
            <div className="block mt-5">
                <div className="block md:flex justify-between items-center mb-4">
                    <div className="mb-2">
                        <Link href="/">
                            <Image className="mr-10" src="/logo.svg" width={160} height={60} alt="На главную"/>
                        </Link>
                        
                    </div>
                    <div>
                        {links.map(link => 
                            <Link 
                                key={link.href} 
                                className="block font-medium mb-2 text-lg mr-4 last:mr-0 md:text-sm md:inline text-gray-500 hover:text-[#0D4CD3] transition-colors" 
                                href={link.href}>{link.label}
                            </Link>)
                        }
                    </div>
                </div>
                <div className="block md:flex justify-between items-center">
                    <div className="block mb-3">
                        <p className="text-sm font-medium text-gray-500">ИП Тарасов Денис Анатольевич</p>
                        <p className="text-sm font-medium text-gray-500">Адрес: РФ, МО, г. Раменское, ул. Михалевича, д. 24</p>
                        <p className="text-sm font-medium text-gray-500">ИНН 504010109463 ОГРНИП  316504000053510</p>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Link href={vkLink} target="_blank">
                            <Image src="/vklogo.svg" width={30} height={30} alt="Группа ВКонтакте" />
                        </Link>
                        <Link href={yandexLink} target="_blank">
                            <Image src="/yandex.svg" width={35} height={35} alt="Мы на Яндекс.Карты" />
                        </Link>
                        <Link href={avitoLink} target="_blank">
                            <Image src="/avitoLogo.svg" width={35} height={35} alt="Мы на Авито" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;