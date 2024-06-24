import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Каталог",
  description: "Просмотрите наш каталог кондиционеров и холодильного оборудования. Мы предлагаем качественные товары и услуги по монтажу.",
  openGraph: {
    title: "Каталог",
    description: "Просмотрите наш каталог кондиционеров и холодильного оборудования."
  }
};

export default function CatalogLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div>
        {children}
      </div>
    </>
  );
}
