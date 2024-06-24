import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Акции и предложения",
  description: "",
  openGraph: {
    title: "Акции",
    description: "Ознакомьтесь с нашими предложениями по продажам кондиционеров и холодильного оборудования."
  }
};

export default function SalesLayout({ children }: LayoutProps) {
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
