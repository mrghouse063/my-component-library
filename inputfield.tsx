import React, { forwardRef, useId, useState } from "react";

export type Variant = "filled" | "outlined" | "ghost";
export type Size = "sm" | "md" | "lg";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: Variant;
  size?: Size;
  type?: string;
  showClear?: boolean;
  showPasswordToggle?: boolean;
  className?: string;
}

const sizeMap: Record<Size, string> = {
  sm: "text-sm px-2 py-1 rounded-md",
  md: "text-base px-3 py-2 rounded-md",
  lg: "text-lg px-4 py-3 rounded-lg"
};

const variantMap: Record<Variant, string> = {
  filled: "bg-gray-100 border border-transparent focus:border-blue-500",
  outlined: "bg-white border border-gray-300 focus:border-blue-500",
  ghost: "bg-transparent border border-transparent focus:border-blue-500"
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
  {
    value,
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled = false,
    invalid = false,
    variant = "outlined",
    size = "md",
    type = "text",
    showClear = false,
    showPasswordToggle = false,
    className = "",
    ...rest
  },
  ref
) {
  const id = useId();
  const describedBy = `${id}-desc`;
  const [localType, setLocalType] = useState(type);

  const base = "w-full transition-shadow focus:outline-none focus:ring-0";
  const invalidClasses = (invalid || !!errorMessage) ? "ring-1 ring-red-300" : "focus:ring-1 focus:ring-blue-200";

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          ref={ref}
          className={`${base} ${sizeMap[size]} ${variantMap[variant]} ${invalidClasses} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid || !!errorMessage}
          aria-describedby={describedBy}
          type={localType}
          {...rest}
        />

        {/* Clear button (appears when showClear true and value exists) */}
        {showClear && !!value && !disabled && (
          <button
            type="button"
            aria-label="Clear input"
            onClick={() => {
              // Parent should clear when receiving a change with empty string.
              onChange?.({ target: { value: "" } } as unknown as React.ChangeEvent<HTMLInputElement>);
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}

        {/* password toggle */}
        {showPasswordToggle && type === "password" && (
          <button
            type="button"
            aria-label={localType === "password" ? "Show password" : "Hide password"}
            onClick={() => setLocalType((t) => (t === "password" ? "text" : "password"))}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {localType === "password" ? "👁" : "🙈"}
          </button>
        )}
      </div>

      <div id={describedBy} className="mt-1 text-xs min-h-[1rem]">
        {errorMessage ? (
          <p role="alert" className="text-red-600">
            {errorMessage}
          </p>
        ) : helperText ? (
          <p className="text-gray-500">{helperText}</p>
        ) : (
          <span className="block h-0" />
        )}
      </div>
    </div>
  );
});

export default InputField;
