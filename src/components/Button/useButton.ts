import { twMerge } from "tailwind-merge";

interface useButtonProps {
  variant: "primary" | "outlined" | "danger";
  className: string;
}

export const useButton = ({ variant, className }: useButtonProps) => {
  const variantClasses = {
    primary: "bg-purple-primary text-white hover:bg-purple-dark",
    outlined:
      "bg-transparent border-2 border-purple-primary text-purple-primary",
    danger:
      "bg-transparent text-red-primary border border-red-primary hover:bg-red-600 hover:text-white",
  };

  const buttonClassName = twMerge(
    variantClasses[variant],
    "rounded-lg p-2 text-sm font-medium shadow transition-all",
    className
  );

  return {
    buttonClassName,
  };
};
