import Hero from '@/components/Hero/Hero';

export default function ChildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero title="My Project" subtitle="full-stack development"/>
      <div className="content-area">{children}</div>
    </>
  );
}