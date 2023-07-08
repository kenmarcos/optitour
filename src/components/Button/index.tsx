import { ComponentPropsWithoutRef } from "react";

import { twMerge } from "tailwind-merge";

const Button = ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"button">) => {
  const buttonClassName = twMerge(
    "rounded-lg bg-purple-primary text-white p-2 text-sm font-medium shadow transition-all hover:bg-purple-dark",
    className
  );

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
