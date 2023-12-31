import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" >
      <body className={inter.className + " flex flex-col items-stretch"}>
      <header className={"h-[70px] fixed top-0 left-0 bg-white w-full text-black z-20"}>
        <Link href={"/"}>Go to home</Link>
      </header>
      <main className={"mb-[40px] mt-[70px] relative flex justify-center"}>
          {children}
      </main>
      <footer className={"h-[40px] fixed bottom-0 left-0 bg-white w-full  text-black z-20"}>
        Footer
      </footer>
      </body>
    </html>
  )
}
