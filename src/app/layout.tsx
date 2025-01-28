import type { Metadata } from "next";
import { Playfair_Display, Alice } from 'next/font/google'
import HeaderWrapper from '@/components/layout/header/HeaderWrapper'
import ServerWarmup from '@/components/base/server-warmup/ServerWarmup'
import "./globals.css";

const playfair = Playfair_Display({ subsets: ['latin'] })
const alice = Alice({
  weight: '400',
  subsets: ['latin'],
  variable: '--alice'
})

export const metadata: Metadata = {
  title: "Billy & Katia Wedding",
  description: "Billy and Katia\'s Wedding Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Don't show header on 404 page
  const is404 = children?.toString().includes('404');

  return (
    <html lang="en">
      <body className={`${playfair.className} ${alice.variable}`}>
        <ServerWarmup />
        {!is404 && <HeaderWrapper />}
        {children}
      </body>
    </html>
  );
}
