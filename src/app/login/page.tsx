export default function LoginPage() {
  return (
    <div className="max-w-4xl mx-auto my-16 max-h-fit text-center">
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
      <div></div>
    </div>
  );
}
