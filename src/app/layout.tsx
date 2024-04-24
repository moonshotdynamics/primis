import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/modules/components/Layout/Header';
import Footer from '@/modules/components/Layout/Footer';
import "./globals.css";
import ToastProvider from "@/utils/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Primis Order Review",
  description: "Created by Isaac Tshiteta",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {id: string}
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header id={params.id} />
        <ToastProvider>
        {children}
        </ToastProvider>
        <Footer />
      </body>
    </html>
  );
}
