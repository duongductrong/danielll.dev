"use client";

import { GithubProfile, useGithubProfile } from "@/contracts/github";
import { createContext, useMemo } from "react";

export interface GithubContextType {
  profile: GithubProfile;
}

export const GithubContext = createContext<GithubContextType>(
  {} as GithubContextType
);

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const profile = useGithubProfile("duongductrong");

  const value = useMemo<GithubContextType>(
    () => ({
      profile,
    }),
    [profile]
  );

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};
