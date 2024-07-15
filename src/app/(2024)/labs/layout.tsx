import React, { PropsWithChildren } from "react";

export interface LabsLayoutProps extends PropsWithChildren {}

const LabsLayout = ({ children }: LabsLayoutProps) => {
  return children;
};

export default LabsLayout;
