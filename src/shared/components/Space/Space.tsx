import { SpaceProps } from "@/shared/components/Space/Space.types";
import { getClassName } from "@/shared";

export const Space = ({ children, className }: SpaceProps) => {
  return (
    <section className={getClassName("flex", className)}>{children}</section>
  );
};
