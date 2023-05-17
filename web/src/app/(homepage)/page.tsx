import NavigationLink from "@/components/ui/NavigationLink";

export default async function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-1 items-center px-4">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-5xl text-black">Tasky</h1>
          <h1 className="text-5xl text-black">Manage your task easily</h1>
          <h2 className="text-lg font-light">
            Click here to{" "}
            <NavigationLink
              href="/login"
              className="text-blue-400 underline hover:text-blue-500 active:text-blue-600"
            >
              Sign up
            </NavigationLink>
          </h2>
        </div>
        <div></div>
      </div>
    </main>
  );
}
