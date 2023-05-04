import NavigationBar from '@/components/ui/NavigationBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-homepage-pattern bg-cover bg-fixed bg-center bg-no-repeat flex flex-col">
      <NavigationBar />
      {children}
    </div>
  );
}
