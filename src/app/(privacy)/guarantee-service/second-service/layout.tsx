import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Второе гарантийное обслуживание",
  description: "",
  openGraph: {
    title: "Второе гарантийное обслуживание",
    description: "",
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