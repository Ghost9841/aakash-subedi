import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { Inter, Roboto_Mono } from 'next/font/google'
import Head from "next/head";
import NavBar from "./components/NavBar";
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
})
const poppins = Poppins({
  weight: ['100','300','200','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Aakash Subedi Portfolio",
  description: "Website Portfolio of Ghost Aakash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-light w-full min-h-screen">
      <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1 "/>
        <link rel="icon" href="@/logo.png"/>
      </Head>
      <body
        className={`${poppins.className} font-poppins bg-light text-dark` }
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
