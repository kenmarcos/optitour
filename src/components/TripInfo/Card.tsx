import { ComponentProps, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const Card = ({ children, ...rest }: CardProps) => {
  const cardClassName = twMerge(
    "shadow-xl p-5 rounded-xl border border-gray-light",
    rest.className
  );

  return (
    <div {...rest} className={cardClassName}>
      {children}
    </div>
  );
};

export default Card;
