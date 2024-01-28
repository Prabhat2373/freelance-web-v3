import React, { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  withBg?: boolean;
}

const Page = ({ children, withBg = true }: PageProps) => {
  return (
    <div className="relative">
      <div
        className={`${withBg ? "bg-blue" : ""} h-[30vh] w-full absolute top-0`}
      ></div>

      <div className="relative z-10 px-28 py-12">{children}</div>
    </div>
  );
};

export default Page;
