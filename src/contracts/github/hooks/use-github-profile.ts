import { use } from "react";
import { getGithubProfile } from "../api";

export const useGithubProfile = (username: string) => {
  return use(getGithubProfile(username));
};
