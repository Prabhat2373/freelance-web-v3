"use client";
import {
  useLazyGetAccountQuery,
  useUpdateAccountMutation,
} from "@/features/rtk/app/userApi";
import { setStoreUser } from "@/features/slices/userReducer";
import { RootState } from "@/features/store/store";
import { statusHandler } from "@/utils/utils";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface FormData {
  // Define the structure of your form data

  // const initialValues = {
  username: "";
  firstName: "";
  lastName: "";
  email: "";
  password: "";
  registration_date: "";
  location: "";
  overview: "";
  skills: [];
  language: "";
  country: "";
  title: "";
  employment_history: [];
  education: "";
  description: "";
  hourly_rate: 0;
  address: "";
  phone: "";
  role?: "";
}

interface FormContextProps {
  activeStepIndex: number;
  setActiveStepIndex: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleNext: () => void;
  handleFormSubmit: (data: any) => Promise<void>;
  handleBack: () => void;
}

export const FormContext = createContext<FormContextProps>({
  activeStepIndex: 0,
  setActiveStepIndex: () => {},
  formData: {},
  setFormData: () => {},
  handleNext: () => {},
  handleFormSubmit: (data: any) => {},
  handleBack: () => {},
});

export const FormContextProvider = ({ children }) => {
  // const activeStep = window.localStorage.getItem("activeStepIndex");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const { user } = useSelector((state: RootState) => state.user);
  const [formData, setFormData] = useState<FormData>(user ?? {});
  const dispatch = useDispatch();
  const [updateAccont, { isLoading }] = useUpdateAccountMutation();
  const [getAccount] = useLazyGetAccountQuery();

  useEffect(() => {
    if (formData) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("onboarding", JSON.stringify(formData));
      }
    }
  }, [activeStepIndex]);
  const router = useRouter();

  const { pathname } = router;
  const onboardingLinks = [
    {
      title: "First, add a title to tell the world what you do.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
      href: "/onboarding/title",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/experience",
      check: "experience",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/education",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/languages",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/skills",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/description",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/rate",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/contact-info",
      check: "title",
      required: true,
      isSkippable: false,
    },
  ];

  useEffect(() => {
    onboardingLinks.forEach((link, index) => {
      if (link.href.includes(pathname)) {
        setActiveStepIndex(index);
      }
    });
  }, [router]);
  const handleNext = () => {
    getAccount("").then((response) => {
      setFormData(response?.data?.data);
      dispatch(setStoreUser(response?.data?.data));
    });
    const { href } = onboardingLinks[activeStepIndex + 1];
    setActiveStepIndex(activeStepIndex + 1);
    router.push(href);
  };

  const handleBack = () => {
    const { href } = onboardingLinks[activeStepIndex - 1];
    setActiveStepIndex(activeStepIndex - 1);
    router.push(href);
  };

  const handleFormSubmit = async (data) => {
    console.log("valuasdes", data);
    // setActiveStepIndex(activeStepIndex + 1);
    const res = await updateAccont(data);
    if (statusHandler(res).isSuccess()) {
      console.log("response", res);
      handleNext();
    }
  };

  return (
    <FormContext.Provider
      value={{
        activeStepIndex,
        setActiveStepIndex,
        formData,
        setFormData,
        handleNext,
        handleFormSubmit,
        handleBack,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useOnboardingForm = () => {
  if (!FormContext) console.log("No useOnboardingForm Found");
  return useContext(FormContext);
};
