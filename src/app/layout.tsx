import type { Metadata } from "next";
import { Playfair_Display, Alice } from 'next/font/google'
import Header from '@/components/layout/header/Header'
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
  return (
    <html lang="en">
      <body className={`${playfair.className} ${alice.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
