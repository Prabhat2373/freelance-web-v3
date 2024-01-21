import { FormContextProvider } from "@/contexts/FormContext";
import { Providers } from "@/features/rtk/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";

import GuestLayout from "@/layout/GuestLayout";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <FormContextProvider>
        <html lang="en">
          <body className={inter.className}>
            <Layout>{children}</Layout>
          </body>
        </html>
      </FormContextProvider>
    </Providers>
  );
}
