import { ReactNode } from "react";
import { FlexProps } from "antd";

export type CenterContainerProps = Partial<FlexProps> & {
  children: ReactNode;
};
