import { FormContextProvider } from "@/contexts/FormContext";
import { Providers } from "@/features/rtk/provider";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

import "react-toastify/dist/ReactToastify.css";

import LayoutProvider from "@/containers/app/LayoutProvider";
import GuestLayout from "@/layout/GuestLayout";
import StepLayout from "@/layout/freelancer/StepLayout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onboarding | Freelancer",
  description: "Welcome Onboarding | Freelancing Platform",
};

export default function OnboardingLayoutIndex({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <FormContextProvider>
        <html lang="en">
          <Head>
            <ColorSchemeScript />
          </Head>
          <body className={inter.className}>
            <LayoutProvider>
              <GuestLayout>
                <StepLayout title={"Steps "} subTitle={"Sub Title"}>
                  {children}
                </StepLayout>
              </GuestLayout>
            </LayoutProvider>
          </body>
        </html>
      </FormContextProvider>
    </Providers>
  );
}
