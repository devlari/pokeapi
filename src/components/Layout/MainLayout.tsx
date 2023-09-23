import React from "react";
import Header from "../Header";

export type Props = {
  children: React.ReactNode;
};

export function MainLayout({
  children
}: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
