import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto mt-20 flex min-h-[760px] max-w-7xl items-center p-4">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-5xl text-green-500">Tasky</h1>
          <h1 className="text-5xl text-green-500">Manage your task easily</h1>
          <h2 className="text-lg font-light">
            Click here to{" "}
            <Link
              href="#"
              className="text-blue-400 underline hover:text-blue-500 active:text-blue-600"
            >
              Sign up
            </Link>
          </h2>
        </div>
        <h1>hello world</h1>
      </div>
    </main>
  );
}
