import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMB AI Solutions | Transform Your Business with AI-First Operations",
  description: "Future-proof your business with AI-first operations. We help small businesses achieve 10x productivity gains through practical AI implementation and workflow transformation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
