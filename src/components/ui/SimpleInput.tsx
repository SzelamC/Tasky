type SimpleInputProps = {
  label: string;
  placeholder?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function SimpleInput({
  label,
  placeholder = "default",
  className,
  id,
  ...props
}: SimpleInputProps) {
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
        className={className}
        {...props}
      />
    </div>
  );
}
