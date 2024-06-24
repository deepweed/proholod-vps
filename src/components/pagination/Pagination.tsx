import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import NotFoundMsg from '../not-found-msg/NotFoundMsg';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }: PaginationProps) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 2;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 2) {
        pages.push(1);
        if (currentPage > 3) {
          pages.push('...');
        }
      }
      if (currentPage > 1) {
        pages.push(currentPage);
      }
      if (currentPage < totalPages - 1) {
        pages.push(currentPage + 1);
      }
      if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = generatePageNumbers();

  if (currentPage > totalPages) {
    return <NotFoundMsg />;
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination flex justify-center flex-wrap">
        {currentPage > 1 && (
          <li>
            <Button variant={'box'} size="icon" className="hidden md:flex mr-2 ml-2" asChild>
              <Link href={`?page=${currentPage - 1}`}>
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </li>
        )}
        {pages.map((page, index) => (
          <li key={index} className={page === currentPage ? 'active' : ''}>
            {page === '...' ? (
              <span className="mr-2 ml-2">...</span>
            ) : (
              <Button variant={'box'} size="icon" className="mr-2 ml-2" asChild>
                <Link href={`?page=${page}`}>{page}</Link>
              </Button>
            )}
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <Button variant={'box'} size="icon" className="hidden md:flex mr-2 ml-2" asChild>
              <Link href={`?page=${currentPage + 1}`}>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
