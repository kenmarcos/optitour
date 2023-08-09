import { twMerge } from "tailwind-merge";

interface UseInputProps {
  error: boolean;
  className: string;
}

export const useInput = ({ error, className }: UseInputProps) => {
  const inputClassName = twMerge(
    "w-full border border-gray-primary rounded-lg bg-white p-2 text-sm font-normal text-gray-dark placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary",
    error ? "border-red-primary" : "",
    className
  );

  return {
    inputClassName,
  };
};
