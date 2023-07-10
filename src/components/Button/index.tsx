import { ComponentPropsWithoutRef } from "react";

import { useButton } from "./useButton";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "outlined" | "danger";
}

const Button = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) => {
  const { buttonClassName } = useButton({ variant, className });

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
