import React from "react";
import Header from "@/components/Header";
import { AppBody } from "./main-layout.styles";

export type Props = {
  children: React.ReactNode;
};

export function MainLayout({
  children
}: Props) {
  return (
    <AppBody>
      <Header />
      {children}
    </AppBody>
  );
}