/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export interface FooterProps extends ComponentProps<"footer"> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer {...props} className={cn("flex items-center gap-1", className)}>
      <Text as="p" variant="body" className="text-muted-foreground">
        Are you looking for old portfolio?{" "}
      </Text>
      <Text
        as={Link}
        variant="body"
        href="//v1.danielll.dev"
        className="text-foreground"
      >
        Old portfolio?
      </Text>
    </footer>
  );
};

export default Footer;
