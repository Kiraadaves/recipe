"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/context/CartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <div className="flex flex-col gap-20">
              <Header />
              <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
                {children}
              </div>
              <Footer />
            </div>
          </CartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
