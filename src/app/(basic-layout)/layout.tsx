import NavigationBar from "@/components/ui/NavigationBar";
import "../globals.css";

export const metadata = {
  title: "Tasky",
  description: "Manage your task easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto h-screen bg-homepage-pattern bg-cover bg-fixed bg-center bg-no-repeat overflow-hidden">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
