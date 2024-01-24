import { MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
};

export default LayoutProvider;
