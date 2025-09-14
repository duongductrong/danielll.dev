"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Atom, MoveUpRight } from "lucide-react";
import Image from "next/image";
import { Suspense, lazy } from "react";

// Dynamic icon component that handles async imports
const DynamicIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  // Create a lazy component for the specific icon
  const IconComponent = lazy(async () => {
    try {
      const iconModule = await import("lucide-react");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Icon = (iconModule as any)[iconName];

      if (!Icon) {
        console.warn(`Icon "${iconName}" not found in lucide-react`);
        return {
          default: ({ className: cls }: { className?: string }) => (
            <Atom className={cls} />
          ),
        };
      }

      return {
        default: ({ className: cls }: { className?: string }) => (
          <Icon className={cls} />
        ),
      };
    } catch (error) {
      console.error(`Failed to load icon "${iconName}":`, error);
      return {
        default: ({ className: cls }: { className?: string }) => (
          <Atom className={cls} />
        ),
      };
    }
  });

  return (
    <Suspense fallback={<Atom className={className} />}>
      <IconComponent className={className} />
    </Suspense>
  );
};

export interface PenCardProps {
  title: string;
  date: string;
  thumbnail?: string;
  icon?: string;
}

export const PenCard = ({ title, date, icon }: PenCardProps) => {
  return (
    <Card className="p-1.5 shadow-none hover:translate-y-[-5px] transition-all duration-300">
      {!icon ? (
        <Image
          src={"/pens/glowing-border/opengraph-image"}
          alt={title}
          width={600}
          height={600}
          className="w-full border border-border rounded-lg h-[156px] object-cover"
        />
      ) : (
        <div className="relative flex h-[156px] w-full items-center justify-center gap-2 rounded-lg border border-border bg-background">
          <div className="absolute top-1/2 left-1/2 flex h-full translate-x-[-50%] translate-y-[-50%] gap-32">
            <span className="h-full border-l border-dashed border-border" />
            <span className="h-full border-l border-dashed border-border" />
          </div>
          <div className="absolute top-1/2 left-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col gap-24">
            <span className="w-full border-t border-dashed border-border" />
            <span className="w-full border-b border-dashed border-border" />
          </div>
          <div className="shadow-bg bg-preview-bg shadow-custom flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-gray-200 shadow-none">
            {icon ? (
              <DynamicIcon iconName={icon} className="size-4" />
            ) : (
              <Atom className="size-4" />
            )}
          </div>
        </div>
      )}

      <CardHeader className="px-0 py-2"></CardHeader>

      <CardContent className="p-2 pt-0">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
            {title}
          </CardTitle>

          <MoveUpRight className="text-muted-foreground size-4" />
        </div>
        <p className="text-muted-foreground text-base">
          {format(date, "MMMM d, yyyy")}
        </p>
      </CardContent>
    </Card>
  );
};
