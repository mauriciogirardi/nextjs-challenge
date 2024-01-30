import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { env } from "@/env";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | standcar',
    default: 'standcar'
  },
  description: "nextjs challenge",
  metadataBase: new URL(env.APP_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="bg-zinc-100 text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
