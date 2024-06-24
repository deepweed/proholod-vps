import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Инверторные коммерческие сплит-системы",
  description: "Инверторные коммерческие сплит-системы – это высокоэффективное и надежное решение для создания оптимального микроклимата в офисных и коммерческих помещениях, обеспечивая комфорт и продуктивность в любых условиях.",
  openGraph: {
    title: "Инверторные коммерческие сплит-системы",
    description: "Инверторные коммерческие сплит-системы – это высокоэффективное и надежное решение для создания оптимального микроклимата в офисных и коммерческих помещениях, обеспечивая комфорт и продуктивность в любых условиях.",
  }
};

export default function MultiSplitLayout({ children }: LayoutProps) {
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