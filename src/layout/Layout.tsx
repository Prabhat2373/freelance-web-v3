"use client";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
// import { RootState } from "../store";
import GuestLayout from "./GuestLayout";
import ClientLayout from "./client/ClientLayout";
import FreelancerLayout from "./freelancer/FreelancerLayout";
import { useParams, useRouter, usePathname } from "next/navigation";
import { RootState } from "@/features/store/store";
import { USER_TYPES } from "@/constants/app.constant";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const params = usePathname();
  const { isLoggedIn, role, user } = useSelector(
    (state: RootState) => state.user
  );
  console.log("user", user);

  useEffect(() => {
    const pagePath = params;
    console.log("role", role === "freelancer");
    // if (!isLoggedIn) {
    //   return router.replace("/login")
    // }

    // if (user?.role === USER_TYPES.FREELANCER) {
    //   return <FreelancerLayout>{children}</FreelancerLayout>;
    // }
    // if (user?.role === USER_TYPES.CLIENT) {
    //   return <FreelancerLayout>{children}</FreelancerLayout>;
    // }

    if (pagePath.startsWith("/fl") && role === "freelancer") {
      return <FreelancerLayout>{children}</FreelancerLayout>;
    } else if (pagePath.startsWith("/cl") && role === "client") {
      return <ClientLayout>{children}</ClientLayout>;
    } else if (
      (pagePath.startsWith("/fl") && role !== "freelancer") ||
      (pagePath.startsWith("/cl") && role !== "client")
    ) {
      // router.replace("/405")
    }
  }, [user]);
  return <GuestLayout>{children}</GuestLayout>;
};

export default Layout;
