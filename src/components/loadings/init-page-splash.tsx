import clsx from "clsx";
import { FC } from "react";
import RotatePersonal from "../rotate-personal";

export interface InitPageSplashProps {}

const InitPageSplash: FC<InitPageSplashProps> = (props) => {
  return (
    <div
      className={clsx(
        "text-foreground bg-background fixed top-0 left-0 w-full h-screen",
        "grid place-items-center",
        "z-[999]"
      )}
    >
      <RotatePersonal enableLogo />
    </div>
  );
};

export default InitPageSplash;
