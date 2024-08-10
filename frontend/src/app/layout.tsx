import Head from "next/head"
import { Sarabun } from 'next/font/google'
import '../scss/global.scss'
import Footer from '../components/Footer/Footer'

const sarabun = Sarabun({
  subsets: ['latin', 'latin-ext', 'thai'],
  style: ['normal', 'italic'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '800']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sarabun.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <div className="content-area">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}