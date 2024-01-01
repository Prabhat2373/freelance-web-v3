import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
// import { RootState } from "../store";
import GuestLayout from "./GuestLayout";
import ClientLayout from "./client/ClientLayout";
import FreelancerLayout from "./freelancer/FreelancerLayout";
import { useRouter } from "next/navigation";
import { RootState } from "@/features/store/store";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { isLoggedIn, role, user } = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    const pagePath = router.pathname;
    console.log("role", role === "freelancer");
    // if (!isLoggedIn) {
    //   return router.replace("/login")
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
  }, []);
  return <GuestLayout>{children}</GuestLayout>;
};

export default Layout;
