"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu } from 'lucide-react';
import SearchNavBar from '@/components/search/SearchNav';
import CallBack from '@/components/search/CallBack/CallBack';
import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleNavBar = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeNavBar = () => {
        setIsMenuOpen(false);
    };

    const links = [
        { label: "О компании", href: "/about"},
        { label: "Каталог", href: "/catalog"},
        { label: "Контакты", href: "/contact"},
        { label: "Акции", href: "/sales"},
        { label: "Услуги", href: "/service"},
    ];

    return (
        <header className="container mx-auto h-20 flex justify-between items-center">
            <nav className="flex items-center">
                <Link href="/">
                    <Image className="mr-10" src="/logo.svg" width={160} height={60} alt="На главную"/>
                </Link>
                <ul className="hidden font-medium lg:flex gap-x-5 sm:text-sm">
                    {links.map(link => 
                        <Link 
                            key={link.href} 
                            className="text-sm text-gray-500 hover:text-[#0D4CD3] transition-colors" 
                            href={link.href}>{link.label}
                        </Link>)
                    }
                </ul>
            </nav>
            <div className="flex">
                <SearchNavBar />
                <div className="hidden lg:block">
                    <CallBack />
                </div>
                <div className="block lg:hidden">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <Button onClick={toggleNavBar} variant={"nostyle"}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="mb-4">
                                <Image className="mr-10" src="/logo.svg" width={160} height={60} alt="На главную"/>
                            </SheetTitle>
                            <SheetDescription>
                                {links.map(link => 
                                    <Link 
                                        key={link.href} 
                                        className="text-xl mb-4 font-semibold block text-black" 
                                        href={link.href}
                                        onClick={closeNavBar}>{link.label}
                                    </Link>)
                                }
                                <Link   className="text-xl mb-4 font-semibold block text-black" 
                                        href="/guarantee-service"
                                        onClick={closeNavBar}>Гарантийное обслуживание</Link>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            </div>
        </header>
    );
}

export default NavBar;