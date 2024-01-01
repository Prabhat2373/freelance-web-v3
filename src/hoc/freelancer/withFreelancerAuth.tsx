import React, {
  type ComponentType,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "@/features/store/store";
import { USER_TYPES } from "@/constants/app.constant";
import AppLayout from "@/layout/app/AppLayout";

const withFreelancerAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const ComponentwithFreelancerAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    // const user = useSelector((state: RootState) => state.user.user)
    const { user: currentUser, isLoggedIn } = useSelector(
      (state: RootState) => state.user
    );
    const user = currentUser?.user_account;
    console.log("isLoading", isLoading);
    console.log("__user", user);
    // console.log("USER_TYPE", user?.user_type);

    // const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const toastId = "clientToastId";

    const checkAuth = useCallback(() => {
      // if (!isLoggedIn) {
      //   router.replace("/login")
      //   setIsLoading(false)
      //   // toast.error("Please Log in to access", { toastId });
      //   return
      // }
      if (
        router.pathname?.startsWith("/fl") &&
        user?.role !== USER_TYPES.FREELANCER
      ) {
        console.log("checking..");

        if (user?.role === USER_TYPES.FREELANCER) {
          setIsLoading(false);
          return;
        }

        if (user?.role === USER_TYPES.CLIENT) {
          setIsLoading(false);
          return;
        }
        if (user?.role !== USER_TYPES.FREELANCER) {
          if (user?.role === USER_TYPES.CLIENT) router.replace("/cl");
          setIsLoading(false);
          return;
        }
      } else {
        setIsLoading(false);
      }
    }, [isLoggedIn, user, router]);

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);

    return isLoading ? (
      <>
        <div className="h-screen bg-black flex justify-center items-center">
          <h1>redirecting..</h1>
        </div>
      </>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return React.memo(ComponentwithFreelancerAuth);
};

export default withFreelancerAuth;

// import React, { ComponentType, useEffect, useState, useCallback } from "react"
// import { useRouter } from "next/navigation"
// import { useSelector } from "react-redux"
// import { RootState } from "@/features/store/store"
// import { USER_TYPES } from "@/constants/app.constant"
// import AppLayout from "@/layout/app/AppLayout"

// const withFreelancerAuth = <P extends object>(
//   WrappedComponent: ComponentType<P>
// ) => {
//   const ComponentwithFreelancerAuth: React.FC<P> = (props) => {
//     const router = useRouter()
//     const [isLoading, setIsLoading] = useState(true)
//     const { user, isLoggedIn } = useSelector((state: RootState) => state.user)

//     const checkAuth = useCallback(() => {
//       if (!isLoggedIn) {
//         router.replace("/login")
//         setIsLoading(false)
//         return
//       }

//       if (router.pathname.startsWith("/fl")) {
//         if (user?.role !== USER_TYPES.FREELANCER) {
//           if (user?.role === USER_TYPES.CLIENT) {
//             router.replace("/cl")
//           } else {
//             router.replace("/") // Redirect to a default route if the user's role is not CLIENT or FREELANCER.
//           }
//           setIsLoading(false)
//         }
//       } else {
//         setIsLoading(false)
//       }
//     }, [isLoggedIn, user, router])

//     useEffect(() => {
//       checkAuth()
//     }, [checkAuth])

//     return isLoading ? (
//       <>
//         <div className="h-screen bg-black flex justify-center items-center">
//           <h1>redirecting..</h1>
//         </div>
//       </>
//     ) : (
//       <WrappedComponent {...props} />
//     )
//   }

//   return React.memo(ComponentwithFreelancerAuth)
// }

// export default withFreelancerAuth
