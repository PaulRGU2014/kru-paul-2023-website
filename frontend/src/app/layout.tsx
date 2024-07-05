import Link from "next/link"
import { Metadata } from 'next'
import './global.scss'
import Footer from '../components/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="content-area">
        <main>{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  )
}