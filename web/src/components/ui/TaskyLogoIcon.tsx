type TaskyLogIconProps = {
  size?: number;
  text: string;
};

export default function TaskyLogoIcon({ size = 32, text }: TaskyLogIconProps) {
  return (
    <span className="flex items-center gap-2 fill-green-500 text-green-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size}
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
      <p className="text-3xl">{text}</p>
    </span>
  );
}
