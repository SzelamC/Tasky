import Button from "@/components/ui/Button";
import SimpleInput from "@/components/ui/SimpleInput";

export default function LoginPage() {
  return (
    <div className="mx-auto my-16 flex max-h-fit max-w-sm flex-col gap-4 text-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={64}
          className="inline"
        >
          <defs>
            <linearGradient id="icon_gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#aeff4c" />
              <stop offset="52%" stopColor="#53ebe3" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>
          <use href="#tasky_logo" fill="url('#icon_gradient')"></use>
        </svg>
      </div>
      <div className="rounded-md border border-gray-200 p-4 shadow-sm">
        <SimpleInput
          label="Email"
          placeholder="Enter here..."
          className="w-full rounded-md border border-gray-200 bg-white p-2 text-xs outline-none focus:border-green-300"
        />
        <SimpleInput
          label="Password"
          placeholder="Enter here..."
          className="w-full rounded-md border border-gray-200 bg-white p-2 text-xs outline-none focus:border-green-300"
        />
        <Button className="w-full rounded-3xl py-1 bg-green-300 font-open-sans text-sm hover:bg-green-400 active:bg-green-500">
          Sign in
        </Button>
      </div>
    </div>
  );
}
