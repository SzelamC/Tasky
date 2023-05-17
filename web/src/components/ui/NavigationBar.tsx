"use client";
import Button from "./Button";
import NavigationLink from "./NavigationLink";
import TaskyLogoIcon from "./TaskyLogoIcon";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 w-full bg-white p-4 shadow-[0_4px_8px_0] shadow-slate-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between md:max-w-7xl">
        <TaskyLogoIcon text="Tasky" />
        <div className="flex items-center gap-10">
          <ul className="hidden items-center gap-6 text-sm text-gray-600 sm:flex ">
            <li>
              <NavigationLink
                href="#"
                className="text-gray-500 hover:text-gray-700"
              >
                Tasks
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href="/login">
                <Button size="sm" variant="primary">
                  Login
                </Button>
              </NavigationLink>
            </li>
          </ul>
          <Button className="block sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}
