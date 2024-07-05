import Link from "next/link"
import { Metadata } from 'next'
import './global.scss'

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
          <footer>
            <p>
              This page was hard-coded with Next.js, TypeScript and SCSS.
            </p>
            <div>
              <Link href="/">Home</Link>
              <Link href="/about-me">About Me</Link>
              <Link href="/skills">My Skills</Link>
              <Link href="/projects">My Projects</Link>
              <Link href="/contact">Contact Me</Link>
              <Link href="/online-resume">My Online Résumé</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}