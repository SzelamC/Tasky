import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const SimpleInputVariants = cva(
  "w-full rounded-lg border outline-none focus:ring-2 focus:ring-opacity-50 border-gray-200",
  {
    variants: {
      variant: {
        default: "text-xs focus:border-gray-400 focus:ring-gray-300",
        primary: "text-xs focus:border-green-400 focus:ring-green-300",
      },
      size: {
        default: "p-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type SimpleInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof SimpleInputVariants> & {
    label: string;
    placeholder?: string;
  };

const SimpleInput = forwardRef<HTMLInputElement, SimpleInputProps>(
  ({ label, placeholder, className, id, variant, size, ...props }, ref) => {
    return (
      <div className="mb-3 flex flex-col gap-2 font-open-sans">
        <label
          htmlFor={id}
          className="inline-block w-full text-left text-xs font-semibold text-black"
        >
          {label}
        </label>
        <input
          id={id}
          placeholder={placeholder}
          className={cn(
            SimpleInputVariants({
              variant,
              size,
              className,
            })
          )}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default SimpleInput;
