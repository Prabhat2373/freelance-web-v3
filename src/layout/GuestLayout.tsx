"use client";

import React from "react";
import dynamic from "next/dynamic";
// const Navbar = dynamic(() => import("../components/layout/Navbar"), {
//   ssr: false,
// });
import Footer from "../components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageTransitionLayout from "@/containers/app/PageTransition";
import { useColorScheme } from "@mantine/hooks";
import { useMantineColorScheme } from "@mantine/core";

const GuestLayout = ({ children }) => {
  // const { setColorScheme } = useMantineColorScheme();

  return (
    <div className="flex flex-col ">
      <Navbar />
      {/* <PageTransitionLayout> */}
      <div className="">{children}</div>
      {/* </PageTransitionLayout> */}
      <Footer />
    </div>
  );
};

export default GuestLayout;
