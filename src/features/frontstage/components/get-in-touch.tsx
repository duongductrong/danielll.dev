import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import {
  CodeXml,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

export interface GetInTouchProps extends ComponentProps<"section"> {}

const GetInTouch = ({ className, ...props }: GetInTouchProps) => {
  return (
    <section {...props} className={cn("flex flex-col gap-4", className)}>
      <Text as="p" className="max-w-[350px] mt-4 text-muted-foreground">
        You can check these links if you wish to
      </Text>

      <div className="flex items-center flex-wrap gap-3 [&>*]:shrink-0">
        <Button as={Link} href="https://codestus.com" target="_blank">
          <CodeXml className="size-3 mr-1" />
          <span>My blog</span>
        </Button>
        <Button
          as={Link}
          href="/assets/documents/Frontend%20Developer%20-%20Duong%20Duc%20Trong%20-%202000.pdf"
          target="_blank"
        >
          <FileText className="size-3 mr-1" />
          <span>Resume</span>
        </Button>
        <Button
          as={Link}
          href="https://github.com/duongductrong"
          target="_blank"
        >
          <Github className="size-3 mr-1" />
          Github
        </Button>
        <Button
          as={Link}
          href="https://www.linkedin.com/in/duongductrong"
          target="_blank"
        >
          <Linkedin className="size-3 mr-1" />
          LinkedIn
        </Button>
        <Button
          as={Link}
          href="https://twitter.com/duongductrong_"
          target="_blank"
        >
          <Twitter className="size-3 mr-1" />
          Twitter
        </Button>
        <Button
          as={Link}
          href="https://www.instagram.com/_duongductrong/"
          target="_blank"
        >
          <Instagram className="size-3 mr-1" />
          Instagram
        </Button>
      </div>
    </section>
  );
};

export default GetInTouch;
