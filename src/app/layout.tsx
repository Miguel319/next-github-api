"use client";
import { useState } from "react";
import { DesktopNav, MobileNav } from "../components";
import { Header } from "../components/header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [shouldShow, setShouldShow] = useState<boolean>(false);

  const toggleMenuNavbar = () => setShouldShow((prev) => !prev);

  return (
    <html>
      <head></head>
      <body>
        <DesktopNav onClick={toggleMenuNavbar} shouldShow={shouldShow} />
        <MobileNav onClick={toggleMenuNavbar} />
        <Header />

        <div className="container mt-8 px-6 mx-auto">
          <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
