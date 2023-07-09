import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from "react";

import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  error?: boolean;
  errorMessage?: string;
}

const Input = (
  { className = "", error = false, errorMessage = "", ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const inputClassName = twMerge(
    "border border-gray-primary rounded-lg bg-white p-2 text-sm font-normal text-gray-dark placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary",
    error ? "border-red-primary" : "",
    className
  );

  return (
    <div className="flex flex-col">
      <input {...rest} ref={ref} className={inputClassName} />
      <small className="text-red-primary mt-1">{errorMessage}</small>
    </div>
  );
};

export default forwardRef(Input);
