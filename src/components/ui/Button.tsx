import clsx from "clsx";
import { HTMLAttributes } from "react";

type ButtonProps = {
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  size?: "xs" | "sm" | "md" | "lg";
  variants?: "contained" | "outlined" | "ghost";
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({
  size = "xs",
  color,
  variants,
  fullWidth,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-full rounded-md border border-gray-200 transition-colors duration-300",
        {
          "inline-flex items-center justify-center gap-2": icon,
          "px-2 py-1 text-xs": size === "xs",
          "px-3 py-2 text-sm": size === "sm",
          "px-4 py-3 text-base": size === "md",
          "px-5 py-4 text-lg": size === "lg",
        }
      )}
      {...props}
    >
      <span>{icon}</span>
      {children}
    </button>
  );
}
