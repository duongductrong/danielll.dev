"use client";

import { contacts } from "@/constants/contact";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { ComponentProps } from "react";

export interface ContactLinksProps extends ComponentProps<"div"> {}

export const ContactLinks = ({ className, ...props }: ContactLinksProps) => {
  return (
    <div
      {...props}
      className={cn(
        "text-muted-foreground flex flex-wrap gap-x-5 gap-y-2 text-base",
        className,
      )}
      data-slot="contact-links"
    >
      {contacts.map((contact) => (
        <a
          key={contact.text}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
          aria-label={`Visit ${contact.text}`}
          tabIndex={0}
        >
          <Circle className="mr-1 size-2" aria-hidden="true" />
          {contact.text}
        </a>
      ))}
    </div>
  );
};

