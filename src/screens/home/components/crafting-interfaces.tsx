"use client";

import { ThunderIcon } from "@/components/icons/thunder-icon";
import { Button } from "@/components/ui/button";
import {
  ToughCard,
  ToughCardContent,
  ToughCardDescription,
  ToughCardHeader,
  ToughCardIcon,
  ToughCardTitle,
} from "@/components/ui/tough-card";
import { cn } from "@/lib/utils";
import { Barcode, Target, Zap } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { ComponentProps } from "react";

export interface CraftingInterfacesProps extends ComponentProps<typeof motion.section> {}

export const CraftingInterfaces = ({
  className,
  ...props
}: CraftingInterfacesProps) => {
  return (
    <motion.section
      {...props}
      data-slot="crafting-interfaces"
      className={cn(
        "grid items-start gap-12 lg:grid-cols-[1fr_24rem_1fr]",
        className,
      )}
    >
      <div className="order-2 flex flex-col gap-12 lg:order-1">
        <ToughCard className="self-start">
          <ToughCardHeader
            leftLabel="Open Source"
            rightLabel="2024"
            leftIcon={<Zap className="size-4" />}
          />
          <ToughCardContent>
            <ToughCardTitle>Hookform Field</ToughCardTitle>
            <ToughCardDescription>
              A powerful React Hook Form wrapper that simplifies form field
              management with built-in validation, error handling, and seamless
              integration. Designed to reduce boilerplate and improve developer
              experience when building complex forms.
            </ToughCardDescription>
          </ToughCardContent>
        </ToughCard>
        <ToughCard className="self-start">
          <ToughCardHeader
            leftLabel="Open Source"
            rightLabel="2024"
            leftIcon={<Barcode className="size-4" />}
          />
          <ToughCardIcon>
            <Barcode className="size-20" />
          </ToughCardIcon>
          <ToughCardContent>
            <ToughCardTitle>Shadcn Docs</ToughCardTitle>
            <ToughCardDescription>
              A comprehensive documentation template built with Shadcn UI
              components. Features beautiful typography, responsive layouts, and
              accessible navigation. Perfect for creating professional
              documentation sites with minimal setup and maximum flexibility.
            </ToughCardDescription>
          </ToughCardContent>
        </ToughCard>
      </div>

      <div className="order-1 flex flex-col gap-12 lg:order-2">
        <div className="hidden min-h-[calc(21rem-3rem)] lg:block"></div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-title mb-3 text-4xl font-bold">
            Crafting interfaces, products, and systems.
          </h2>
          <p className="text-paragraph text-base">
            I build intuitive and polished experiences, from concepts to
            high-fidelity prototypes, by partnering closely with engineers,
            research, and design peers.
          </p>

          <Link href="/work">
            <Button variant="secondary" className="mt-4 w-full" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
        <ToughCard className="self-start">
          <ToughCardHeader
            leftLabel="Open Source"
            rightLabel="2024"
            leftIcon={<Target className="size-4" />}
          />
          <ToughCardIcon>
            <ThunderIcon className="size-20" />
          </ToughCardIcon>
          <ToughCardContent>
            <ToughCardTitle>Tiptap Extensions</ToughCardTitle>
            <ToughCardDescription>
              Custom extensions and utilities for Tiptap editor, enhancing rich
              text editing capabilities. Includes advanced formatting options,
              collaborative features, and seamless integration patterns for
              modern web applications.
            </ToughCardDescription>
          </ToughCardContent>
        </ToughCard>
      </div>

      <div className="order-1 flex flex-col gap-12 lg:order-3 lg:-translate-y-24">
        <ToughCard className="self-start">
          <ToughCardHeader
            leftLabel="Project"
            rightLabel="2024"
            leftIcon={<Zap className="size-4" />}
          />
          <ToughCardIcon>
            <Barcode className="size-20" />
          </ToughCardIcon>
          <ToughCardContent>
            <ToughCardTitle>SAJ Dashboard System</ToughCardTitle>
            <ToughCardDescription>
              A comprehensive dashboard builder with API integration and alert
              management. Features drag-and-drop interface, real-time data
              visualization, and customizable widgets. Built for scalability and
              ease of use in enterprise environments.
            </ToughCardDescription>
          </ToughCardContent>
        </ToughCard>
        <ToughCard className="self-start">
          <ToughCardHeader
            leftLabel="Project"
            rightLabel="2024"
            leftIcon={<Target className="size-4" />}
          />
          <ToughCardContent>
            <ToughCardTitle>Edgee Art Studio</ToughCardTitle>
            <ToughCardDescription>
              A modern studio website showcasing creative services and portfolio
              work. Features smooth animations, responsive design, and intuitive
              navigation. Built to promote and highlight the company&apos;s artistic
              capabilities and client success stories.
            </ToughCardDescription>
          </ToughCardContent>
        </ToughCard>
      </div>
    </motion.section>
  );
};
