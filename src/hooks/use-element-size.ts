/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useRef, useState } from "react";
import { useEvent } from "react-use";

export function useElementSize<T = HTMLElement>(forwardRef?: RefObject<T>) {
  const ref = useRef<T | null>(forwardRef?.current ?? null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const handleMeasure = () => {
    if (ref.current) {
      const element = ref.current as unknown as HTMLElement;

      const { width, height } = element.getBoundingClientRect();

      setSize({ width, height });
    }
  };

  useEvent("resize", handleMeasure);

  useEffect(() => {
    handleMeasure();
  }, [ref.current]);

  return [ref, size] as const;
}
