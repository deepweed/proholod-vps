import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PROХолод - кондиционеры и холодильное оборудование в Раменском",
  description: "PROХолод - надежный партнер для установки кондиционеров и холодильного оборудования в Раменском и Раменской области. Профессиональная команда предлагает полный спектр услуг по монтажу и обслуживанию климатических и холодильных систем для бытовых и коммерческих объектов.",
  openGraph: {
    title: "PROХолод - кондиционеры и холодильное оборудование в Раменском",
    description: "PROХолод - надежный партнер для установки кондиционеров и холодильного оборудования в Раменском и Раменской области."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="container mx-auto flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}