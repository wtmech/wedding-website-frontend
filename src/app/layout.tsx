import type { Metadata } from "next";
import { Playfair_Display, Alice } from 'next/font/google'
import dynamic from 'next/dynamic'
import "./globals.css";

const Header = dynamic(() => import('@/components/layout/header/Header'), {
  ssr: false
})

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
        {!is404 && <Header />}
        {children}
      </body>
    </html>
  );
}
