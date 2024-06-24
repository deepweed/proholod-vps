import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Политика конфиденциальности",
  description: "Раздел подробно описывает, как мы собираем, обрабатываем и храним персональные данные наших клиентов, а также как мы защищаем их конфиденциальность в соответствии с действующим законодательством.",
  openGraph: {
    title: "Политика конфиденциальности",
    description: "Раздел подробно описывает, как мы собираем, обрабатываем и храним персональные данные наших клиентов, а также как мы защищаем их конфиденциальность в соответствии с действующим законодательством.",
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