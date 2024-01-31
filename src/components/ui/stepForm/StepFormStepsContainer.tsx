"use client";
import Image from "next/image";
// import React from "react";

// const StepFormStepsContainer = () => {
//   const tabs = [
//     {
//       step: 1,
//       heading: "type of service",
//     },
//   ];
//   return (
//     <>
//       <div className="w-full border border-gray-300 rounded-lg justify-around items-center mb-16 p-3 flex">
//         {/* ACTIVE TAB  */}
//         <div className="rounded-full items-center flex">
//           {/* CURRENT SLIDE TAB  */}
//           <div className="w-55 h-55 min-w-55 min-h-55 bg-purple-600 rounded-full justify-center items-center flex shadow-md">
//             <img
//               src="https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg"
//               loading="lazy"
//               alt=""
//             />
//           </div>
//           <div className="ml-4">
//             <div className="text-purple-600 font-sans font-Circularstd text-sm font-medium">
//               Step 1/6
//             </div>
//             <div className="text-blue-900 font-sans font-Circularstd text-base font-bold">
//               Type of Service
//             </div>
//           </div>
//         </div>
//         <div className="w-1 min-h-32 bg-opacity-48 bg-gray ml-2 mr-2" />
// <div data-tippy-content="Add your text" className="tabs">
//   <img
//     src="https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6df3d0683b9f_Slide%20Icon%2002.svg"
//     loading="lazy"
//     alt=""
//     className="slider-tab-icon"
//   />
// </div>
//         <div className="w-1 min-h-32 bg-opacity-48 bg-gray ml-2 mr-2" />
//         <div
//           data-tippy-content="Add your text"
//           className="bg-gray-50 rounded-full items-center p-3 flex"
//         >
//           <img
//             src="https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d1922683b99_Slide%20Icon%2003.svg"
//             loading="lazy"
//             alt=""
//             className="slider-tab-icon"
//           />
//         </div>
//         <div className="w-1 min-h-32 bg-opacity-48 bg-gray ml-2 mr-2" />
//         <div
//           data-tippy-content="Add your text"
//           className="bg-gray-50 bg-opacity-35 rounded-full items-center p-3 flex"
//         >
//           <img
//             src="https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d70f0683b90_Slide%20Icon%2004.svg"
//             loading="lazy"
//             alt=""
//             className="slider-tab-icon"
//           />
//         </div>
//         <div className="w-1 min-h-32 bg-opacity-48 bg-gray ml-2 mr-2" />
//         <div
//           data-tippy-content="Add your text"
//           className="bg-gray-50 bg-opacity-35 rounded-full items-center p-3 flex"
//         >
//           <img
//             src="https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6dfdeb683b96_Slide%20Icon%2005.svg"
//             loading="lazy"
//             alt=""
//             className="slider-tab-icon"
//           />
//         </div>
//         <div className="w-1 min-h-32 bg-opacity-48 bg-gray ml-2 mr-2" />
//         <div
//           data-tippy-content="Add your text"
//           className="bg-gray-50 bg-opacity-35 rounded-full items-center p-3 flex"
//         >
//           <img
//             src="https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d032c683b9a_Slide%20Icon%2006.svg"
//             loading="lazy"
//             alt=""
//             className="slider-tab-icon"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default StepFormStepsContainer;

import React, { useState } from "react";

const stepsData = [
  {
    iconUrl:
      "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg",
    stepNumber: "Step 1/6",
    heading: "Type of Service",
  },
  {
    iconUrl:
      "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6df3d0683b9f_Slide%20Icon%2002.svg",
    stepNumber: "Step 2/6",
    heading: "Next Step",
  },
  {
    iconUrl:
      "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d1922683b99_Slide%20Icon%2003.svg",
    stepNumber: "Step 3/6",
    heading: "Another Step",
  },
  {
    iconUrl:
      "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d70f0683b90_Slide%20Icon%2004.svg",
    stepNumber: "Step 4/6",
    heading: "Yet Another Step",
  },
  {
    iconUrl:
      "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6dfdeb683b96_Slide%20Icon%2005.svg",
    stepNumber: "Step 5/6",
    heading: "Almost There",
  },
  {
    iconUrl:
      "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d032c683b9a_Slide%20Icon%2006.svg",
    stepNumber: "Step 6/6",
    heading: "Final Step",
  },
];

const YourComponent = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full border border-gray-300 rounded-lg justify-around items-center mb-16 p-3 flex">
      {stepsData.map((step, index) => (
        <React.Fragment key={index}>
          {/* ACTIVE TAB  */}

          {active !== index ? (
            <div
              data-tippy-content="Add your text"
              className="bg-gray-50 bg-opacity-35 rounded-full items-center p-3 flex"
              onClick={() => setActive(index)}
            >
              <img src={step.iconUrl} loading="lazy" alt="" className="w-7" />
            </div>
          ) : (
            <div className="rounded-full items-center flex">
              {/* CURRENT SLIDE TAB  */}
              <div className="w-55 h-55 min-w-55 min-h-55 bg-purple-600 rounded-full justify-center items-center flex shadow-md p-4">
                <img src={step.iconUrl} loading="lazy" alt="" />
              </div>
              <div className="ml-4">
                <div className="text-purple-600 font-sans font-Circularstd text-sm font-medium">
                  {step.stepNumber}
                </div>
                <div className="text-blue-900 font-sans font-Circularstd text-base font-bold">
                  {step.heading}
                </div>
              </div>
            </div>
          )}
          {index !== stepsData.length - 1 && (
            <div className="w-1  bg-opacity-48 bg-gray ml-2 mr-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default YourComponent;
