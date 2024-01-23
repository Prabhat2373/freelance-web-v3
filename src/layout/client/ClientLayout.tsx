"use client";
// import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import ClientNavbar from "./partials/ClientNavbar";

const ClientLayout = ({ children }) => {
  // const router = useRouter();
  // const { user } = useSelector((state: RootState) => state.user);
  // useEffect(() => {
  //   if (router.pathname.startsWith("/cl") && user?.role !== "client") {
  //     router.replace("/fl")
  //     return
  //   }
  // }, [])
  return (
    <div>
      <ClientNavbar />
      <main className="min-h-[70vh]">{children}</main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default ClientLayout;
