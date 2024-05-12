import { ReactNode } from "react";

export type BaseLayoutProps<T = unknown, F = ReactNode> = {
  children: React.ReactNode;
} & Record<T, F>;
