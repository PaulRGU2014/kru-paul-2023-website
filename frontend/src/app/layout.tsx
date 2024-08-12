"use client"

import Head from "next/head"
import '../scss/global.scss'
import Footer from '../components/Footer/Footer'




export default function RootLayout({children}: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body suppressHydrationWarning={true}>
          {children}
          <Footer/>
      </body>
    </html>
  )
}