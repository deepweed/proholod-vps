"use client";

import SalesCardDialog from '@/components/sales-card/SalesCardDialog';
import { useState, useEffect } from 'react';

interface SaleInterface {
  id: number;
  title: string;
  imagePath: string;
  cardDescription: string;
  description: string;
}

export default function Sales() {
  const [sales, setSales] = useState<SaleInterface[]>([]);

  useEffect(() => {
    async function getSales() {
      try {
        const response = await fetch('/api/sales');
        const salesData = await response.json();
        setSales(salesData);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    }
    getSales();
  }, []);

  return (
    <div>
        {sales.length > 0 ? (
          <div>
            <ul>
              {sales.map((sale) => (
                <li className="mb-3" key={sale.id}>
                  <SalesCardDialog title={sale.title} description={sale.description} dialogDesc={sale.cardDescription}/>
                </li>
              ))}
            </ul>
          </div>
      ) : (
        <div className="text-center mt-24">
          <p className="font-medium text-xl text-gray-500">В данный момент нет никаких акций :(</p>
        </div>
      )}
    </div>
  );
}
