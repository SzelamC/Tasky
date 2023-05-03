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
      <body className="mx-auto">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
