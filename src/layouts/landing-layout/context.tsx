"use client";

import { createContext, PropsWithChildren, useContext, useMemo } from "react";

export interface LandingLayoutContextType {}

export const LandingLayoutContext = createContext<LandingLayoutContextType>(
  {} as LandingLayoutContextType
);

export const LandingLayoutContextProvider = ({
  children,
}: PropsWithChildren) => {
  const values = useMemo(() => ({}), []);

  return (
    <LandingLayoutContext.Provider value={values}>
      {children}
    </LandingLayoutContext.Provider>
  );
};

export const useLandingLayoutContext = () => {
  return useContext(LandingLayoutContext);
};
