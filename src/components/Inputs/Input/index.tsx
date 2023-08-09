import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from "react";

import { useInput } from "./useInput";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  error?: boolean;
  errorMessage?: string;
}

const Input = (
  { className = "", error = false, errorMessage = "", ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const { inputClassName } = useInput({ error, className });

  return (
    <div className="flex flex-col">
      <input {...rest} ref={ref} className={inputClassName} />
      {error && errorMessage && (
        <small className="text-red-primary mt-1">{errorMessage}</small>
      )}
    </div>
  );
};

export default forwardRef(Input);
