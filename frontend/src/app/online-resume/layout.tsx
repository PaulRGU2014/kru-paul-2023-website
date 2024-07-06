'use client'

import Hero from "@/components/Hero/Hero";
import Paul from "@/assets/paul.webp";
import content from "./content.json";

console.log(content);

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero image={Paul} content={content.hero_title}/>
      {children}
    </>
  );
}
