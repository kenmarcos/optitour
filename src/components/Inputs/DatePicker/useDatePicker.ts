import { twMerge } from "tailwind-merge";

interface UseDatePickerProps {
  error: boolean;
  className: string;
}

export const useDatePicker = ({ error, className }: UseDatePickerProps) => {
  const datePickerClassName = twMerge(
    "w-full rounded-lg border border-gray-primary p-2 text-sm font-normal text-gray-dark placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary",
    error ? "border-red-primary" : "",
    className
  );

  return {
    datePickerClassName,
  };
};
