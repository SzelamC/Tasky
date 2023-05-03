// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M408 143.1C408 166.1 390.1 183.1 368 183.1C345.9 183.1 328 166.1 328 143.1C328 121.9 345.9 103.1 368 103.1C390.1 103.1 408 121.9 408 143.1zM384 312.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V373.3C224 350.6 215 328.1 199 312.1C183 296.1 161.4 288 138.7 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H199.9C281.7-3.798 408.8-8.546 483.9 5.272C495.6 7.411 504.6 16.45 506.7 28.07C520.5 103.2 515.8 230.3 384 312.1V312.1zM197.9 253.9C210.8 260.2 222.6 268.7 232.1 279C243.3 289.4 251.8 301.2 258.1 314.1C363.9 284.1 414.8 234.5 439.7 188C464.7 141.3 466.1 90.47 461.7 50.33C421.5 45.02 370.7 47.34 323.1 72.33C277.5 97.16 227.9 148.1 197.9 253.9H197.9zM41.98 345.5C76.37 311.1 132.1 311.1 166.5 345.5C200.9 379.9 200.9 435.6 166.5 470C117 519.5 .4765 511.5 .4765 511.5C.4765 511.5-7.516 394.1 41.98 345.5V345.5zM64.58 447.4C64.58 447.4 103.3 450.1 119.8 433.6C131.2 422.2 131.2 403.6 119.8 392.2C108.3 380.8 89.81 380.8 78.38 392.2C61.92 408.7 64.58 447.4 64.58 447.4z"/></svg>
import Link from "next/link";
import Button from "./Button";

function TaskyLogoIcon() {
  return (
    <span className="flex items-center gap-2 fill-green-500 text-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={32}>
        <defs>
          <linearGradient id="icon_gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#aeff4c" />
            <stop offset="52%" stopColor="#53ebe3" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>
        <path
          fill="url('#icon_gradient')"
          d="M408 143.1C408 166.1 390.1 183.1 368 183.1C345.9 183.1 328 166.1 328 143.1C328 121.9 345.9 103.1 368 103.1C390.1 103.1 408 121.9 408 143.1zM384 312.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V373.3C224 350.6 215 328.1 199 312.1C183 296.1 161.4 288 138.7 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H199.9C281.7-3.798 408.8-8.546 483.9 5.272C495.6 7.411 504.6 16.45 506.7 28.07C520.5 103.2 515.8 230.3 384 312.1V312.1zM197.9 253.9C210.8 260.2 222.6 268.7 232.1 279C243.3 289.4 251.8 301.2 258.1 314.1C363.9 284.1 414.8 234.5 439.7 188C464.7 141.3 466.1 90.47 461.7 50.33C421.5 45.02 370.7 47.34 323.1 72.33C277.5 97.16 227.9 148.1 197.9 253.9H197.9zM41.98 345.5C76.37 311.1 132.1 311.1 166.5 345.5C200.9 379.9 200.9 435.6 166.5 470C117 519.5 .4765 511.5 .4765 511.5C.4765 511.5-7.516 394.1 41.98 345.5V345.5zM64.58 447.4C64.58 447.4 103.3 450.1 119.8 433.6C131.2 422.2 131.2 403.6 119.8 392.2C108.3 380.8 89.81 380.8 78.38 392.2C61.92 408.7 64.58 447.4 64.58 447.4z"
        />
      </svg>
      <p className="text-3xl">Tasky</p>
    </span>
  );
}

type NavigationLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

function NavigationLink({ href, children, className }: NavigationLinkProps) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 w-full bg-white p-4 shadow-[0_4px_8px_0] shadow-slate-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between md:max-w-5xl lg:max-w-7xl">
        <TaskyLogoIcon />
        <div className="flex items-center gap-10">
          <ul className="hidden items-center gap-6 text-sm text-gray-600 sm:flex">
            <li>
              <NavigationLink
                href="#"
                className="text-gray-500 hover:text-gray-700"
              >
                Features
              </NavigationLink>
            </li>
            <li>
              <NavigationLink
                href="#"
                className="text-gray-500 hover:text-gray-700"
              >
                Documentation
              </NavigationLink>
            </li>
            <li>
              <Button className="rounded-md bg-green-400 px-4 py-1.5 text-sm font-normal text-black hover:bg-green-500 active:bg-green-600">
                Login
              </Button>
            </li>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            className="block sm:hidden"
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
        </div>
      </div>
    </nav>
  );
}
