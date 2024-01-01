// import React, {
//   type ComponentType,
//   useEffect,
//   useState,
//   useCallback,
// } from "react"
// import { useRouter } from "next/navigation"
// // import { toast } from "react-toastify";
// import { useSelector } from "react-redux"
// import type { RootState } from "@/features/store/store"
// import { USER_TYPES } from "@/constants/app.constant"
// import AppLayout from "@/layout/app/AppLayout"

// const withClientAuth = <P extends object>(
//   WrappedComponent: ComponentType<P>
// ) => {
//   const ComponentWithClientAuth: React.FC<P> = (props) => {
//     const router = useRouter()
//     const [isLoading, setIsLoading] = useState(true)
//     // const user = useSelector((state: RootState) => state.user.user)
//     const { user, isLoggedIn } = useSelector((state: RootState) => state.user)
//     console.log("isLoading", isLoading)
//     console.log("__user", user)
//     // console.log("USER_TYPE", user?.user_type);

//     // const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
//     const toastId = "clientToastId"

//     const checkAuth = useCallback(() => {
//       if (!isLoggedIn) {
//         router.replace("/login")
//         return
//       }
//       if (
//         router.pathname.startsWith("/cl") &&
//         user?.role !== USER_TYPES.CLIENT
//       ) {
//         // if (!isLoggedIn) {
//         //   router.replace("/login")
//         //   return
//         // }

//         if (user?.role === USER_TYPES.CLIENT) {
//           setIsLoading(false)
//           return
//         }

//         if (user?.role !== USER_TYPES.CLIENT) {
//           if (user?.role === USER_TYPES.FREELANCER) router.replace("/fl")
//           return
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
//         <h1>Loading..</h1>
//       </>
//     ) : (
//       <WrappedComponent {...props} />
//     )
//   }

//   return React.memo(ComponentWithClientAuth)
// }

// export default withClientAuth

import React, { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/features/store/store";
import { USER_TYPES } from "@/constants/app.constant";
import AppLayout from "@/layout/app/AppLayout";

const withClientAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const ComponentWithClientAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const { user, isLoggedIn } = useSelector((state: RootState) => state.user);

    useEffect(() => {
      if (router.pathname.startsWith("/cl") && !isLoading) {
        // Check the user's role only if the pathname starts with "/cl"
        if (!isLoggedIn) {
          router.replace("/login");
        } else {
          if (user?.role !== USER_TYPES.CLIENT) {
            router.replace(user?.role === USER_TYPES.FREELANCER ? "/fl" : "/");
          } else {
            setIsLoading(false);
          }
        }
      } else {
        setIsLoading(false);
      }
    }, [router, isLoading, user, isLoggedIn]);

    return isLoading ? (
      <h1>Loading client...</h1>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return React.memo(ComponentWithClientAuth);
};

export default withClientAuth;
