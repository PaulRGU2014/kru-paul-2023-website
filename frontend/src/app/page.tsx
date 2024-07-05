import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Home() {
  return (
    <main>
      <p>
        Thank you for visiting my website. I am a software engineer with a passion for web development.
      </p>
      <div>
        <Link href="/about-me">About Me</Link>
        <Link href="/skills">My Skills</Link>
        <Link href="/projects">My Projects</Link>
        <Link href="/contact">Contact Me</Link>
        <Link href="/online-resume">My Online Résumé</Link>
      </div>
    </main>
  );
}
