import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center flex-col ">{children}</div>
  );
};

export default Container;
