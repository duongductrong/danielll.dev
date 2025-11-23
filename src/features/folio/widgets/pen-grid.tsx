"use client";

import Container from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { PenCard } from "@/features/folio/components/pen-card";
import { cn } from "@/lib/utils";
import { allPens } from "content-collections";
import { sortBy } from "lodash-es";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

export interface PenGridProps extends ComponentProps<"div"> {
  container?: boolean;
}

const PenGrid = ({ className, container = true, ...props }: PenGridProps) => {
  return (
    <Container
      {...props}
      className={cn(container ? "max-w-2xl" : null, "w-full", className)}
    >
      <div className="mb-4">
        <Text as="h2" variant="headline">
          Work
        </Text>
        <Text as="p" variant="body" className="text-muted-foreground mb-4">
          Some of my works.
        </Text>
      </div>
      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2",
          container ? "max-w-2xl" : "w-full",
        )}
      >
        {sortBy(allPens, "date")
          .reverse()
          .map((pen) => (
            <Link key={pen._meta.path} href={`/pens/${pen._meta.path}`}>
              <PenCard
                title={pen.title}
                date={pen.date.toISOString()}
                thumbnail={pen.thumbnail}
                icon={pen.icon}
              />
            </Link>
          ))}
      </div>

      {allPens.length === 0 && (
        <div className="py-12 text-center">
          <Code2 className="text-muted-foreground mx-auto mb-4 size-12" />
          <h3 className="mb-2 text-lg font-semibold">No pens found</h3>
          <p className="text-muted-foreground">No pens available yet</p>
        </div>
      )}
    </Container>
  );
};

export default PenGrid;
