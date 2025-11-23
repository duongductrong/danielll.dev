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
            leftLabel="Product Launch"
            rightLabel="JUN. 2025"
            leftIcon={<Zap className="size-4" />}
          />
          <ToughCardContent>
            <ToughCardTitle>Introducing Lightning Notes</ToughCardTitle>
            <ToughCardDescription>
              A revolutionary note-taking experience designed for speed and
              clarity. Capture ideas instantly with keyboard shortcuts, organize
              with smart tags, and sync seamlessly across all your devices.
              Built for creators who think fast.
            </ToughCardDescription>
          </ToughCardContent>
        </ToughCard>
        <ToughCard className="self-start">
          <ToughCardHeader
            leftLabel="Design System"
            rightLabel="MAR. 2025"
            leftIcon={<Barcode className="size-4" />}
          />
          <ToughCardIcon>
            <Barcode className="size-20" />
          </ToughCardIcon>
          <ToughCardContent>
            <ToughCardTitle>Component Library Evolution</ToughCardTitle>
            <ToughCardDescription>
              Building a comprehensive design system that scales across
              platforms. Featuring accessible components, consistent patterns,
              and detailed documentation. Empowering teams to ship faster while
              maintaining quality and brand consistency.
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

          <Link href="/projects">
            <Button variant="secondary" className="mt-4 w-full" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
        <ToughCard className="self-start">
          <ToughCardHeader
            leftLabel="Mobile App"
            rightLabel="SEP. 2024"
            leftIcon={<Target className="size-4" />}
          />
          <ToughCardIcon>
            <ThunderIcon className="size-20" />
          </ToughCardIcon>
          <ToughCardContent>
            <ToughCardTitle>Fitness Tracker Reimagined</ToughCardTitle>
            <ToughCardDescription>
              A fresh approach to health tracking that focuses on sustainable
              habits. Track workouts, nutrition, and wellness goals with
              beautiful visualizations. Designed to motivate without
              overwhelming, helping users build lasting healthy routines.
            </ToughCardDescription>
          </ToughCardContent>
        </ToughCard>
      </div>

      <div className="order-1 flex flex-col gap-12 lg:order-3 lg:-translate-y-24">
        <ToughCard className="self-start">
          <ToughCardHeader
            leftLabel="E-Commerce"
            rightLabel="APR. 2025"
            leftIcon={<Zap className="size-4" />}
          />
          <ToughCardIcon>
            <Barcode className="size-20" />
          </ToughCardIcon>
          <ToughCardContent>
            <ToughCardTitle>Smart Shopping Experience</ToughCardTitle>
            <ToughCardDescription>
              Reimagining online retail with personalized recommendations and
              seamless checkout flows. AI-powered search, virtual try-on, and
              one-click purchasing. Creating delightful shopping journeys that
              convert browsers into loyal customers.
            </ToughCardDescription>
          </ToughCardContent>
        </ToughCard>
        <ToughCard className="self-start">
          <ToughCardHeader
            leftLabel="Analytics"
            rightLabel="JAN. 2025"
            leftIcon={<Target className="size-4" />}
          />
          <ToughCardContent>
            <ToughCardTitle>Data Visualization Suite</ToughCardTitle>
            <ToughCardDescription>
              Transforming complex data into actionable insights through
              intuitive dashboards. Interactive charts, real-time updates, and
              customizable reports. Empowering decision-makers with clear,
              beautiful data storytelling.
            </ToughCardDescription>
          </ToughCardContent>
        </ToughCard>
      </div>
    </motion.section>
  );
};
