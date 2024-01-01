"use client";
import React, { Suspense, useEffect } from "react";
import withClientProtection from "../../hoc/client/withClientAuth";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/features/store/store";
import Loading from "./loading";
import PageTransitionLayout from "@/containers/app/PageTransition";

const ClientLayout = ({ children }) => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  // useEffect(() => {
  //   if (router.pathname.startsWith("/cl") && user?.role !== "client") {
  //     router.replace("/fl")
  //     return
  //   }
  // }, [])
  return (
    <div>
      <Navbar />
      {/* <PageTransitionLayout> */}
      <Suspense fallback={<Loading />}>{children}</Suspense>
      {/* </PageTransitionLayout> */}
      <Footer />
    </div>
  );
};

export default ClientLayout;
