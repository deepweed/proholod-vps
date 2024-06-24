import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Услуги",
  description: "Полный спектр услуг по установке и настройке кондиционеров в г. Раменское и прилегающих районах, включая выезд бригады, монтаж блоков, прокладку коммуникаций и пуско-наладку.",
  openGraph: {
    title: "Услуги",
    description: "Полный спектр услуг по установке и настройке кондиционеров в г. Раменское и прилегающих районах, включая выезд бригады, монтаж блоков, прокладку коммуникаций и пуско-наладку.",
  }
};

export default function GuaranteeLayout({ children }: LayoutProps) {
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