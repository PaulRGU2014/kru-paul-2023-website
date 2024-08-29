import Hero from '@/components/Hero/Hero';

export default function ChildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero title="My Resumé" subtitle="Paul Thanataweenont"/>
      <div className="content-area">{children}</div>
    </>
  );
}