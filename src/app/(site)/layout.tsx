import Smoother from "@/components/motions/smoother";
import { FC, HTMLAttributes, ReactNode } from "react";

export interface SiteLayoutProps extends Pick<HTMLAttributes<any>, "children"> {
  header?: ReactNode;
  footer?: ReactNode;
}

const SiteLayout: FC<SiteLayoutProps> = ({ children, footer, header }) => {
  return (
    <Smoother>
      {header}
      {children}
      {footer}
    </Smoother>
  );
};

export default SiteLayout;
