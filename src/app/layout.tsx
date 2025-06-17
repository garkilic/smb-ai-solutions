import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solution Threads | Transform Your Business with AI-First Operations",
  description: "Future-proof your business with AI-first operations. We help small businesses achieve 10x productivity gains through practical AI implementation and workflow transformation.",
  icons: {
    icon: '/myfavicon.ico',
    apple: '/myfavicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  other: {
    'overscroll-behavior': 'none',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overscroll-none">
      <body className={`${inter.className} antialiased min-h-screen bg-neutral overscroll-none`}>
        <div className="w-full overflow-x-hidden overscroll-none">
          <Navigation />
          <main className="pt-16 md:pt-20">
            {children}
          </main>
          <Script
            src="https://tally.so/widgets/embed.js"
            strategy="lazyOnload"
          />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
