"use client";
// import { RootState } from "@/store";
import { BellIcon, UserIcon } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { ProfileMenu } from "../dropdown/ProfileMenu";
import { RootState } from "@/features/store/store";
import Link from "next/link";
import HydrationWrapper from "@/hoc/app/HydrationWrapper";
import {
  FileButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { USER_TYPES } from "@/constants/app.constant";
import { ThemeToggleButton } from "../ui/header/ThemeToggleButton";

const Navbar = () => {
  // const =useColorScheme()
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { user, isLoggedIn, role } = useSelector(
    (state: RootState) => state.user
  );
  console.log("role", role);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <HydrationWrapper>
      <nav className="bg-white flex justify-between px-16 py-4 items-center ">
        <div>
          <Link href={user?.role === USER_TYPES.CLIENT ? "/cl" : "/fl"}>
            <h1 className="text-[#FF4C4A] text-3xl font-bold">Logo</h1>
          </Link>
        </div>
        {/* <FileButton /> */}
        {/* <button
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
        >
          toggle theme
        </button> */}

        <div>
          {!isLoggedIn ? (
            <div className="flex gap-10">
              <Link href={"/fl/jobs"} className="text-base font-medium">
                Find Talent
              </Link>
              <Link href={"/fl/jobs"} className="text-base font-medium">
                Find work
              </Link>
              <Link href={"/fl/jobs"} className="text-base font-medium">
                why us
              </Link>
            </div>
          ) : (
            <div className="flex gap-10">
              {/* <li className="text-base font-medium"> */}
              <Link href={"/fl/jobs"}>Browse projects</Link>
              {/* </li> */}
              {/* <li className="text-base font-medium"> */}
              <Link href="/fl/jobs">My Jobs</Link>
              {/* </li> */}
              {/* <li className="text-base font-medium"> */}
              <Link href={"/fl/messages"}>Messages</Link>
              {/* </li> */}
            </div>
          )}
        </div>
        <div className="flex gap-5">
          {!isLoggedIn ? (
            <div className="flex gap-4">
              <Link
                href={"/auth/login"}
                className="text-base font-medium p-0 m-0 flex items-center"
              >
                <button>Log in</button>
              </Link>
              <Link href={"/auth/register"}>
                <button className="px-9 py-3 flex justify-center items-center bg-red-500 text-white font-semibold rounded-full">
                  sign up
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div className="flex gap-4">
                <BellIcon className="cursor-pointer" />
                <UserIcon
                  className="cursor-pointer"
                  onClick={() => setIsOpen((prev) => !prev)}
                />
                <ProfileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
                <ThemeToggleButton />
              </div>
            </>
          )}
        </div>
      </nav>
    </HydrationWrapper>
  );
};

export default Navbar;
