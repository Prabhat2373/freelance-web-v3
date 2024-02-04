"use client";

import { Tooltip } from "@mantine/core";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";

import React from "react";

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

const StepFormStepsContainer = ({
  activeStepIndex,
  setActiveStepIndex,
  withHref,
  onboardingLinks,
}) => {
  const pathname = usePathname();
  // const router = useRouter();
  // const [active, setActive] = useState(0);
  const router = useRouter();
  console.log("activeStepIndex", activeStepIndex);

  const handleStepClick = (index: number, link) => {
    if (withHref) {
      router.push(link.href);
      setActiveStepIndex(index);
    }
    setActiveStepIndex(index);
  };
  console.log("onboardingLinks", onboardingLinks);

  return (
    <div className="w-full border border-gray-300 rounded-lg justify-around items-center mb-16 p-3 flex">
      {onboardingLinks?.map((step, index) => (
        <React.Fragment key={index}>
          {/* ACTIVE TAB  */}

          {activeStepIndex !== index ? (
            <>
              <Tooltip label={step?.title} withArrow>
                <div
                  data-tippy-content="Add your text"
                  className={classNames(
                    "bg-gray-50  rounded-full items-center p-3 flex cursor-pointer",
                    {
                      "bg-green-400": step?.isCompleted,
                    }
                  )}
                  onClick={() => handleStepClick(index, step)}
                >
                  {/* <img src={step?.icon} loading="lazy" alt="" className="w-7" /> */}
                  {step?.icon}
                </div>
              </Tooltip>
            </>
          ) : (
            <div className="rounded-full items-center flex">
              {/* CURRENT SLIDE TAB  */}
              <div className="w-55 h-55 text-white min-w-55 min-h-55 bg-purple-600 rounded-full justify-center items-center flex shadow-md p-4">
                {/* <img src={step?.icon} loading="lazy" alt="" /> */}
                {step?.icon}
              </div>
              <div className="ml-4">
                <div className="text-purple-600 font-sans font-Circularstd text-sm font-medium">
                  Step {index + 1}/{10}
                </div>
                <div className="text-blue-900 font-sans font-Circularstd text-base font-bold">
                  {step?.title}
                </div>
              </div>
            </div>
          )}
          {index !== onboardingLinks?.length - 1 && (
            <div className="w-0.5  bg-opacity-48 bg-gray ml-2 mr-2 h-[50px]" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepFormStepsContainer;
