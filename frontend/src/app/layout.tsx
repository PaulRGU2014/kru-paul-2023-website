"use client"

import Head from "next/head"
import '../scss/global.scss'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({children}: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body suppressHydrationWarning={true}>
          {children}
      </body>
      <GoogleAnalytics gaId="G-606GP5V2VM" />
    </html>
  )
}