import { RefObject, useEffect, useState } from "react";

export const useOffsetY = (ref: RefObject<HTMLElement>) => {
  const [offsetY, setOffsetY] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setOffsetY(ref.current.getBoundingClientRect().top);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return offsetY;
};
