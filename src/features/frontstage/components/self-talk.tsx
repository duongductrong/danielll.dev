/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export interface SelfTalkProps extends ComponentProps<"section"> {}

const SelfTalk = ({ className, ...props }: SelfTalkProps) => {
  return (
    <section
      {...props}
      className={cn(
        "text-muted-foreground flex flex-col gap-2 [&_*[data-highlight]]:text-foreground",
        className
      )}
    >
      <Text as="p">
        Dear all! I&rsquo;m a <span data-highlight>Front-end Engineer</span>,
        anything else? — I&rsquo;m not just a developer,
      </Text>
      <Text as="p" className="">
        I&rsquo;m a{" "}
        <Link
          href="https://codestus.com"
          className="underline underline-offset-4"
          data-highlight
        >
          Blogger
        </Link>
        . And if that wasn&rsquo;t enough, guess what?
      </Text>
      <Text as="p">
        maybe <span data-highlight>Freelancer</span>? Oh yeah, I&rsquo;ve got
        that badge too!
      </Text>

      <Text as="p" className="max-w-[350px] mt-4">
        I thrive on <span data-highlight>creative challenges</span> and enjoy
        contributing to <span data-highlight>open-source projects</span>. With a
        passion for clean code and intuitive interfaces,{" "}
        <span data-highlight>
          I transform complex requirements into elegant digital experiences
        </span>
        .
      </Text>
    </section>
  );
};

export default SelfTalk;
