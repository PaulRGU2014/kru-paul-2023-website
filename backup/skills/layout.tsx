import Hero from '@/components/Hero/Hero';

export default function ChildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero title="My Skills" subtitle="in case you're curious"/>
      <div className="content-area">{children}</div>
    </>
  );
}