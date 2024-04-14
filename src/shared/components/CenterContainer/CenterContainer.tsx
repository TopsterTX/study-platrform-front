import { Flex } from "antd";
import { CenterContainerProps } from "./types";

export const CenterContainer = ({
  children,
  ...other
}: CenterContainerProps) => {
  return (
    <Flex justify="center" align="center" {...other}>
      {children}
    </Flex>
  );
};
