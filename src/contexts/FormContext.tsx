"use client";
import {
  useLazyGetAccountQuery,
  useUpdateAccountMutation,
} from "@/features/rtk/app/userApi";
import { setStoreUser } from "@/features/slices/userReducer";
import { RootState } from "@/features/store/store";
import { statusHandler } from "@/utils/utils";
import { useParams, usePathname, useRouter } from "next/navigation";
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

interface IonboardingLink {
  title: string;
  description: string;
  href: string;
  check: string;
  required: boolean;
  isSkippable: boolean;
}

interface FormContextProps {
  activeStepIndex: number;
  setActiveStepIndex: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleNext: () => void;
  handleFormSubmit: (data: any) => Promise<void>;
  handleBack: () => void;
  onboardingLinks: IonboardingLink[];
}

export const FormContext = createContext<FormContextProps>({
  activeStepIndex: 0,
  setActiveStepIndex: () => {},
  formData: {},
  setFormData: () => {},
  handleNext: () => {},
  handleFormSubmit: (data: any) => {},
  handleBack: () => {},
  onboardingLinks: [],
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

  // const { pathname } = router;
  const pathname = usePathname();
  const onboardingLinks = [
    {
      title: "First, add a title to tell the world what you do.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
      href: "/onboarding/title",
      check: "title",
      required: true,
      isSkippable: false,
      icon: "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg",
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/experience",
      check: "experience",
      required: true,
      isSkippable: false,
      icon: "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg",
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/education",
      check: "title",
      required: true,
      isSkippable: false,
      icon: "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg",
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/languages",
      check: "title",
      required: true,
      isSkippable: false,
      icon: "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg",
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/skills",
      check: "title",
      required: true,
      isSkippable: false,
      icon: "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg",
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/description",
      check: "title",
      required: true,
      isSkippable: false,
      icon: "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg",
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/rate",
      check: "title",
      required: true,
      isSkippable: false,
      icon: "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg",
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/contact-info",
      check: "title",
      required: true,
      isSkippable: false,
      icon: "https://assets-global.website-files.com/6085444bc1ab19c6fb0bd04f/6086ae038a8e6d140d683b9e_Slide%20Icon%2001.svg",
    },
  ];
  console.log("pathname", pathname);

  useEffect(() => {
    onboardingLinks.forEach((link, index) => {
      if (link.href.includes(pathname)) {
        console.log("indextobeset", index);

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

  console.log("activeStepIndexhook", activeStepIndex);

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
        onboardingLinks,
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
