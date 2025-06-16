import { Inter } from "next/font/google";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

import clsx from "clsx";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { Providers } from "./providers";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark">
      <body
        className={clsx(
          `${inter.className} bg-white dark:bg-gray-950 min-h-svh h-full`
        )}
      >
        <Providers>
          {children}
          <Analytics />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
