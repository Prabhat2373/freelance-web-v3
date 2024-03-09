import { FormContextProvider } from "@/contexts/FormContext";
import { Providers } from "@/features/rtk/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "react-toastify/dist/ReactToastify.css";

import GuestLayout from "@/layout/GuestLayout";
import Layout from "@/layout/Layout";
import Head from "next/head";
import ClientLayout from "@/layout/client/ClientLayout";
import LayoutProvider from "@/containers/app/LayoutProvider";

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
          <Head>
            <ColorSchemeScript />
          </Head>
          <body className={inter.className}>
            <LayoutProvider>
              <GuestLayout>{children}</GuestLayout>
            </LayoutProvider>
          </body>
        </html>
      </FormContextProvider>
    </Providers>
  );
}
