import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Холодильное оборудование",
  description: "Сплит-системы Belluna - решение любых ваших задач по охлаждению и заморозки продукции.",
  openGraph: {
    title: "Холодильное оборудование",
    description: "Сплит-системы Belluna - решение любых ваших задач по охлаждению и заморозки продукции."
  }
};

export default function RefrigerationLayout({ children }: LayoutProps) {
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
