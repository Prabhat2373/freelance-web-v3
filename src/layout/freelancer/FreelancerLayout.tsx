"use client";

import { RootState } from "@/features/store/store";
import useAuth from "@/hoc/app/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const FreelancerLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { checkAuthorization } = useAuth();

  return (
    <div>
      <Navbar />
      <main className="">{children}</main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default FreelancerLayout;
