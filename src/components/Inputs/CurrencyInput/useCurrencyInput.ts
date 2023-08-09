import { twMerge } from "tailwind-merge";

interface UseCurrencyInputProps {
  error: boolean;
  className: string;
}

export const useCurrencyInput = ({
  error,
  className,
}: UseCurrencyInputProps) => {
  const currencyInputClassName = twMerge(
    "w-full border border-gray-primary rounded-lg bg-white p-2 text-sm font-normal text-gray-dark placeholder-black placeholder-opacity-20 outline-none ransition-all focus:ring-1 focus:ring-primary",
    error ? "border-red-primary" : "",
    className
  );

  return {
    currencyInputClassName,
  };
};
