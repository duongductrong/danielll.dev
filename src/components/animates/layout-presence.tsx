"use client";

import { AnimatePresence } from "framer-motion";
import { PropsWithChildren, useState } from "react";

import { useSelectedLayoutSegment } from "next/navigation";

import { useContext, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDebounce } from "react-use";

function usePreviousValue<T>(value: T): T | undefined {
  const prevValue = useRef<T>();

  useEffect(() => {
    prevValue.current = value;
    return () => {
      prevValue.current = undefined;
    };
  });

  return prevValue.current;
}

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const prevContext = usePreviousValue(context) || null;

  const segment = useSelectedLayoutSegment();
  const prevSegment = usePreviousValue(segment);

  const changed =
    segment !== prevSegment &&
    segment !== undefined &&
    prevSegment !== undefined;

  return (
    <LayoutRouterContext.Provider value={changed ? prevContext : context}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export interface LayoutPresenceProps extends PropsWithChildren {}

export const LayoutPresence = ({ children }: LayoutPresenceProps) => {
  const segment = useSelectedLayoutSegment();
  const [layoutSegment, setLayoutSegment] = useState(segment);

  useDebounce(() => setLayoutSegment(segment), 5, [segment]);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={layoutSegment}>
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};
