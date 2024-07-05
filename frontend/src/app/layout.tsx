import Head from "next/head"
import './global.scss'
import Footer from '../components/Footer/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />      
      </Head>
      <body>
        <div className="content-area">
        <main>{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  )
}