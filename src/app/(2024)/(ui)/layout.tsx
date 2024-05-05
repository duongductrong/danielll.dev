import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}

const Layout = ({ header, footer, children }: LayoutProps) => {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
};

export default Layout;
