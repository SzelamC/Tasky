import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex gap-2 w-full items-center justify-center rounded-lg",
  {
    variants: {
      variant: {
        default: "bg-gray-300 hover:bg-gray-400 active:bg-gray-500",
        primary: "bg-green-300 hover:bg-green-400 active:bg-green-500",
        secondary: "bg-blue-300 hover:bg-blue-400 active:bg-blue-500",
        outlined:
          "bg-transparent border border-gray-300 hover:border-gray-400 active:border-gray-500",
      },
      size: {
        default: "py-2 text-xs",
        xs: "py-2 text-xs",
        sm: "py-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    color?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, variant, size, className, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
      >
        {icon && <span>{icon}</span>}
        {children}
      </button>
    );
  }
);

export default Button;
