import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type Props = {
  children: React.ReactNode;
};

export function MainLayout({
  children
}: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
}