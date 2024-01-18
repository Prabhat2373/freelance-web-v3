"use client";

import { RootState } from "@/features/store/store";
import useAuth from "@/hoc/app/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { useLazyGetAccountQuery } from "@/features/rtk/app/userApi";

const FreelancerLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { checkAuthorization } = useAuth();

  const dispatch = useDispatch();

  const [getProfile] = useLazyGetAccountQuery();

  useEffect(() => {
    getProfile().then((res) => {
      dispatch(setStoreUser(res?.data?.data));
    });
  }, []);

  return (
    <div>
      <Navbar />
      <main className="min-h-[70vh]">{children}</main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default FreelancerLayout;
