import { HTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
