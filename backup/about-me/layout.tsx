import Hero from '@/components/Hero/Hero';

export default function ChildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero title="My Story" subtitle="a little bit of myself"/>
      <div className="content-area">{children}</div>
    </>
  );
}