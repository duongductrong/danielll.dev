import { PropsWithChildren } from "react";

export interface LandingMainProps extends PropsWithChildren {}

export const LandingMain = ({ children }: LandingMainProps) => {
  return <main>{children}</main>;
};
