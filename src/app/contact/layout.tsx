import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Контакты",
  description: "Свяжитесь с нами для получения дополнительной информации о наших услугах. Мы всегда рады помочь!",
  openGraph: {
    title: "Контакты",
    description: "Свяжитесь с нами для получения дополнительной информации о наших услугах."
  }
};

export default function ContactLayout({ children }: LayoutProps) {
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
