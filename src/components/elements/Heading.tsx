import React, { ComponentType, HTMLAttributes } from "react";

type HeadingSize = "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | "4xl";

interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  size: HeadingSize;
  children: React.ReactNode;
}
const Heading = ({ children, size }: IHeading) => {
  const textSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  const textSizeClass = textSizeClasses[size] || "text-base";

  return <h1 className={`font-bold ${textSizeClass} mb-2`}>{children}</h1>;
};

export default Heading;
