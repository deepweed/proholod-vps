"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Search } from 'lucide-react';
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Product } from '@/types'; 
import CallBack from './CallBack/CallBack';

const SearchNavBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchResults = async () => {
            if (searchQuery.trim() === '') {
                setSearchResults([]);
                return;
            }

            const response = await fetch(`/api/search?query=${searchQuery}`);
            if (response.ok) {
                const results: Product[] = await response.json();
                setSearchResults(results.slice(0, 5));
            } else {
                console.error('Failed to fetch search results');
            }
        };

        const delayDebounceFn = setTimeout(() => {
            fetchResults();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);

    const handleDialogOpen = () => setIsOpen(true);
    const handleDialogClose = () => setIsOpen(false);

    const handleResultClick = () => {
        handleDialogClose();
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button onClick={handleDialogOpen} className="mr-2" variant={"link"}>
                        <Search className="h-6 w-6" />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Поиск по сайту</DialogTitle>
                    <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="mt-2 mb-2" type="text" placeholder="Введите текст запроса" />
                    {searchResults.length > 0 && (
                        <ul className="mt-2 border border-gray-200 rounded-md overflow-hidden">
                        {searchResults.map((result) => (
                          <li key={result.id} className="border-b last:border-0 hover:bg-gray-100">
                            <Link href={`/catalog/${result.category}/${result.href}`} onClick={handleResultClick} className="block p-4">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md overflow-hidden">
                                  <img src={Array.isArray(result.images[0]?.imagePath) ? result.images[0].imagePath[0] : result.images[0]?.imagePath || '/default-image.jpg'} alt={result.title} className="h-full w-full object-cover"/>
                                </div>
                                <div className="ml-3">
                                  <p className="text-sm font-medium text-gray-900">{result.title}</p>
                                  <p className="text-sm text-gray-500">{result.brand} - {result.series}</p>
                                  {result.cost === 0 ? (
                                    <p className="text-sm text-red-500">Нет в наличии, цена не указана</p>
                                  ) : (
                                    <p className="text-sm text-gray-500">Цена: {result.cost} ₽</p>
                                  )}
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}

export default SearchNavBar;