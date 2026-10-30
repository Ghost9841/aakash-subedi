import type { Metadata } from "next";
import { Poppins, Inter } from 'next/font/google'
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";
import TransitionEffect from "@/components/TransitionEffect";
import { cn } from "@/lib/utils";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ThemeClickSpark from "@/components/ThemeClickSpark";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const poppins = Poppins({
  weight: ['100', '300', '200', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  metadataBase: new URL("https://aakash-subedi.com.np"),

  title: {
    default: "Aakash Subedi - Web Developer Portfolio",
    template: "%s | Aakash Subedi"
  },
  description: "Portfolio of Aakash Subedi (Ghost Aakash) - Full-stack web developer specializing in React, Next.js, and modern web technologies. Love and hate relationship with coding",
  keywords: ["web developer", "portfolio", "react", "nextjs", "fullstack"],
  authors: [{ name: "Aakash Subedi" }],
  creator: "Aakash Subedi",
  publisher: "Aakash Subedi",
  robots: "index, follow",
  icons: {
    icon: "/ghost_logo.jpeg",
    apple: "/ghost_logo.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aakash-subedi.com.np", // Replace with your actual domain
    siteName: "Aakash Subedi Portfolio",
    title: "Aakash Subedi - Web Developer Portfolio",
    description: "Portfolio of Aakash Subedi (Ghost Aakash) - Full-stack web developer",
    images: [
      {
        url: "/ghost_logo.jpeg", // Create an OG image
        width: 1200,
        height: 630,
        alt: "Aakash Subedi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash Subedi - Web Developer Portfolio",
    description: "Portfolio of Aakash Subedi (Ghost Aakash) - Full-stack web developer",
    images: ["/ghost_logo.jpeg"],
    creator: "@GhostAakash", // Add your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("w-full min-h-screen", "font-sans", inter.variable)}>
      <body
        className={`${poppins.className} font-poppins bg-light text-dark dark:bg-dark cursor-none hover:cursor-none`}
      >
        <TransitionEffect />
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
          )`}
        </Script>
        <NavBar />
        <SmoothCursor />

        <main className="min-h-screen">
         <ThemeClickSpark>
          <SmoothScroll>
            {children}
          </SmoothScroll>
         </ThemeClickSpark>
        </main>
        <Footer />
      </body>
    </html>
  );
}