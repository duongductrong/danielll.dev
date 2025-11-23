import { ComponentProps } from "react";

export function ThunderIcon(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M 5 4.5 L 11 4.5 L 12 6 L 9 10.5 Z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
      <path
        d="M 13 4.5 L 19 4.5 L 15 10.5 L 19 10.5 L 11 20.5 L 11 16.5 L 5 16.5 Z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
