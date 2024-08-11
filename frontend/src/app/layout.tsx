import Head from "next/head"
import '../scss/global.scss'
import Hero from "./../components/Hero/Hero"
import Footer from '../components/Footer/Footer'
import InViewAnim from '../utils/InViewAnim/InViewAnim'


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
          <Hero />
          <div className="content-area">
              {children}
          </div>
          <Footer />
      </body>
    </html>
  )
}