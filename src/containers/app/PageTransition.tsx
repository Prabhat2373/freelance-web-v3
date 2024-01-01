// import { motion, AnimatePresence } from "framer-motion"
// import { ReactNode, FC } from "react"

// // ROUTER
// import { useRouter } from "next/navigation"

// // TYPES
// interface ILayoutProps {
//   children: ReactNode
// }

// const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
//   const router = useRouter()

//   return (
//     <AnimatePresence mode={"wait"}>
//       <motion.div
//         key={router.route}
//         initial="initialState"
//         animate="animateState"
//         exit="exitState"
//         transition={{
//           type: "tween",
//           duration: 0.5,
//         }}
//         variants={{
//           initialState: {
//             x: "100vw",
//           },
//           animateState: {
//             x: 0,
//           },
//           exitState: {
//             x: "-100vw",
//           },
//         }}
//         className="min-h-screen w-full" // Feel free to add your classes here
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   )
// }
// export default PageTransitionLayout

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, FC } from "react";
import { useRouter } from "next/navigation";

interface ILayoutProps {
  children: ReactNode;
}

const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode={"popLayout"}>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }}
        className="min-h-screen w-full" // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionLayout;
