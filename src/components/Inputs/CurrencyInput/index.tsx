"use client";

import CurrencyInputComponent, {
  CurrencyInputProps as CurrencyInputComponentProps,
} from "react-currency-input-field";

import { useCurrencyInput } from "./useCurrencyInput";

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
  const { currencyInputClassName } = useCurrencyInput({ error, className });

  return (
    <div className="flex w-full flex-col">
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
