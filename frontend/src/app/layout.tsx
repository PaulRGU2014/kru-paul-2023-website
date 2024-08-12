"use client"

import Head from "next/head"
import '../scss/global.scss'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from "react";
import InViewAnim from '../utils/InViewAnim/InViewAnim'
import { usePathname } from 'next/navigation';




export default function RootLayout({children}: {children: React.ReactNode}) {

  const pathname = usePathname()

  const [isHomePage, setIsHomePage] = useState(false)

  console.log(pathname)

  useEffect(() => {
    setTimeout(() => {
      if (pathname === "/")
      setIsHomePage (true)
    }, 1100);
  }, [pathname])
  
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body suppressHydrationWarning={true}>
          {children}
          <Footer isHomePage={isHomePage} />
      </body>
    </html>
  )
}