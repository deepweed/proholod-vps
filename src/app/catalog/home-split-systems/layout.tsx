import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Бытовые сплит-системы",
  description: "Бытовые кондиционеры – отличное техническое решение для создания комфортного микроклимата в помещениях небольшой площади.",
  openGraph: {
    title: "Бытовые сплит-системы",
    description: "Бытовые кондиционеры – отличное техническое решение для создания комфортного микроклимата в помещениях небольшой площади."
  }
};

export default function HomeSplitLayout({ children }: LayoutProps) {
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