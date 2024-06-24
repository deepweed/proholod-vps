import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Гарантийное обслуживание PROхолод",
  description: "Гарантийное обслуживание PROхолод – надежная защита вашего оборудования на 3 года, при условии регулярного годового техобслуживания.",
  openGraph: {
    title: "Гарантийное обслуживание PROхолод",
    description: "Гарантийное обслуживание PROхолод – надежная защита вашего оборудования на 3 года, при условии регулярного годового техобслуживания.",
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