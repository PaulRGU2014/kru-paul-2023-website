import Hero from "@/components/Hero/Hero"
import Paul from "@/assets/paul.webp"

export default function ResumeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        <Hero image={Paul} />
        {children}
    </>
)
  }