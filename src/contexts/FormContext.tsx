"use client";
import IconHeading from "@/components/icons/IconHeading";
import {
  useLazyGetAccountQuery,
  useUpdateAccountMutation,
} from "@/features/rtk/app/userApi";
import { setStoreUser } from "@/features/slices/userReducer";
import { RootState } from "@/features/store/store";
import { statusHandler } from "@/utils/utils";
import {
  IconAddressBook,
  IconCertificate2,
  IconFileDescription,
  IconLanguage,
  IconListCheck,
  IconListDetails,
  IconReceipt2,
  IconSchool,
} from "@tabler/icons-react";
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
  const [onboardingLinks, setOnboardingLinks] = useState([
    {
      title: "Add Title",
      description: "Add Your Designation or Heading.",
      href: "/onboarding/title",
      check: "title",
      required: true,
      isSkippable: false,
      icon: <IconListDetails />,
      isCompleted: false,
    },
    {
      title: "Add Experience ",
      description: "Tell us about your experience",
      href: "/onboarding/experience",
      check: "experience",
      required: true,
      isSkippable: false,
      icon: <IconCertificate2 />,
      isCompleted: false,
    },
    {
      title: "Add Education",
      href: "/onboarding/education",
      description: "Tell us about your Education Background",

      check: "education",
      required: true,
      isSkippable: false,
      icon: <IconSchool />,
      isCompleted: false,
    },
    {
      title: "Pick Languages",
      href: "/onboarding/languages",
      description: "Select Speaking Lanuage",

      check: "languages",
      required: true,
      isSkippable: false,
      icon: <IconLanguage />,
      isCompleted: false,
    },
    {
      title: "Obtain Skills",
      href: "/onboarding/skills",
      check: "skills",
      required: true,
      isSkippable: false,
      icon: <IconListCheck />,
      isCompleted: false,
    },
    {
      title: "Write a Bio",
      href: "/onboarding/description",
      check: "profile-bio",
      required: true,
      isSkippable: false,
      icon: <IconFileDescription />,
      isCompleted: false,
    },
    {
      title: "Rate",
      href: "/onboarding/rate",
      check: "freelancing-rates",
      required: true,
      isSkippable: false,
      icon: <IconReceipt2 />,
      isCompleted: false,
    },
    {
      title: "Contact Details",
      href: "/onboarding/contact-info",
      check: "contact-details",
      required: true,
      isSkippable: false,
      icon: <IconAddressBook />,
      isCompleted: false,
    },
  ]);

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
  // const onboardingLinks =;
  console.log("pathname", pathname);

  useEffect(() => {
    onboardingLinks.forEach((link, index) => {
      if (link.href.includes(pathname)) {
        console.log("indextobeset", index);

        setActiveStepIndex(index);
      }
    });
    const latestSteps = onboardingLinks?.map((link) => {
      if (pathname === link.href) {
        return {
          ...link,
          isCompleted: true,
        };
      }
      return link;
    });

    setOnboardingLinks(latestSteps);
  }, [router]);
  const handleNext = () => {
    getAccount("").then((response) => {
      setFormData(response?.data?.data);
      dispatch(setStoreUser(response?.data?.data));
    });
    const { href } = onboardingLinks[activeStepIndex + 1];
    setActiveStepIndex(activeStepIndex + 1);
    console.log("pathname", pathname);

    const latestSteps = onboardingLinks?.map((link) => {
      if (pathname === link.href) {
        return {
          ...link,
          isCompleted: true,
        };
      }
      return link;
    });

    setOnboardingLinks(latestSteps);
    console.log("latestSteps", latestSteps);

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
