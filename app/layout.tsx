import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { poppins } from "./fonts";
import "./globals.scss";
import Provider from "./provider/layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>{children} </Provider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
