"use client";

import CurrencyInputComponent, {
  CurrencyInputProps as CurrencyInputComponentProps,
} from "react-currency-input-field";

import { twMerge } from "tailwind-merge";

interface CurrencyInputProps extends CurrencyInputComponentProps {
  error?: boolean;
  errorMessage?: string;
}

const CurrencyInput = ({
  className = "",
  error = false,
  errorMessage = "",
  ...rest
}: CurrencyInputProps) => {
  const currencyInputClassName = twMerge(
    "border border-gray-primary rounded-lg bg-white p-2 text-sm font-normal text-gray-dark placeholder-black placeholder-opacity-20 outline-none",
    className
  );

  return (
    <div>
      <CurrencyInputComponent
        {...rest}
        className={currencyInputClassName}
        lang="pt-BR"
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
      />

      {error && errorMessage && (
        <small className="text-red-primary mt-1">{errorMessage}</small>
      )}
    </div>
  );
};

export default CurrencyInput;
