import React from "react";
import Header from "@/components/Header";

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
    </>
  );
}