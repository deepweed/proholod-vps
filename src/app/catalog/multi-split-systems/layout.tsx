import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Мультисплит-системы",
  description: "Мультисплит-системы - эффективные и эстетичные решения для кондиционирования воздуха в больших помещениях, позволяющие подключать несколько внутренних блоков к одному наружному, обеспечивая равномерное охлаждение и эстетически приятный внешний вид.",
  openGraph: {
    title: "Мультисплит-системы",
    description: "Мультисплит-системы - эффективные и эстетичные решения для кондиционирования воздуха в больших помещениях, позволяющие подключать несколько внутренних блоков к одному наружному, обеспечивая равномерное охлаждение и эстетически приятный внешний вид."
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