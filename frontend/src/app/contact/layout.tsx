import Hero from '@/components/Hero/Hero';

export default function ChildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero title="My Contact" subtitle="ways to reach me out"/>
      <div className="content-area">{children}</div>
    </>
  );
}