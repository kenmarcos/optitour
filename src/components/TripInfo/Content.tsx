import React, { ComponentProps, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface ContentProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const Content = ({ children, ...rest }: ContentProps) => {
  const contentClassName = twMerge("text-purple-dark text-sm", rest.className);

  return (
    <div {...rest} className={contentClassName}>
      {children}
    </div>
  );
};

export default Content;
