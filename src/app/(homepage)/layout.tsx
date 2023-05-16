import NavigationBar from "@/components/ui/NavigationBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col bg-homepage-pattern bg-cover bg-fixed bg-center bg-no-repeat">
      <NavigationBar />
      {children}
    </div>
  );
}
