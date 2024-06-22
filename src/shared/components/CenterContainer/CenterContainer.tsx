import { getClassName, Space } from "@/shared";
import { CenterContainerProps } from "./types";

export const CenterContainer = ({
  children,
  className,
}: CenterContainerProps) => {
  return (
    <Space
      className={getClassName("justify-center", "items-center", className)}
    >
      {children}
    </Space>
  );
};
