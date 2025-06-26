import type { Metadata } from "next";
import {  Mona_Sans } from "next/font/google";
import "./globals.css";


const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intervu.ai",
  description: "Best interview preparation kit, powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${monaSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
