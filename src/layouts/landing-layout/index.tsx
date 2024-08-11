import { PropsWithChildren } from "react";
import { LandingHeader } from "./header";
import { LandingMain } from "./main";
import { LandingMenu } from "./menu";

export interface LandingLayoutProps extends PropsWithChildren {}

export const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <LandingHeader />
      <LandingMain>{children}</LandingMain>
      <LandingMenu />
    </>
  );
};
