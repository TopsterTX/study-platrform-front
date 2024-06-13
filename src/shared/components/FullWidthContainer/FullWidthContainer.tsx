import { Space } from "@/shared";
import { ReactNode } from "react";

type FullWidthContainer = {
  children: ReactNode;
};

export const FullWidthContainer = ({ children }: FullWidthContainer) => {
  return <article className="w-screen h-screen">{children}</article>;
};
