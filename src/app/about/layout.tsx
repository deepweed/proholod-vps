import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "О нас",
  description: "Узнайте больше о компании PROХолод. Мы предлагаем услуги по установке и обслуживанию кондиционеров и холодильного оборудования.",
  openGraph: {
    title: "О нас",
    description: "Узнайте больше о компании PROХолод и наших услугах."
  }
};

export default function AboutLayout({ children }: LayoutProps) {
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
