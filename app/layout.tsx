import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//const geistSans = Geist({
 // variable: "--font-geist-sans",
 // subsets: ["latin"],
//});

//const geistMono = Geist_Mono({
  //variable: "--font-geist-mono",
  //subsets: ["latin"],
//});

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'Next.js with Appwrite',
  description: 'A Next.js app with Appwrite integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


