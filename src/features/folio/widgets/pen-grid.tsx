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

export interface PenGridProps extends ComponentProps<"div"> {}

const PenGrid = ({ className, ...props }: PenGridProps) => {
  return (
    <Container {...props} className={cn("w-full max-w-2xl", className)}>
      <div className="mb-4">
        <Text as="h2" variant="headline">
          Work
        </Text>
        <Text as="p" variant="body" className="mb-4 text-muted-foreground">
          Some of my works.
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        {sortBy(allPens, "date").reverse().map((pen) => (
          <Link key={pen._meta.path} href={`/craft/${pen._meta.path}`}>
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
        <div className="text-center py-12">
          <Code2 className="size-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No pens found</h3>
          <p className="text-muted-foreground">No pens available yet</p>
        </div>
      )}
    </Container>
  );
};

export default PenGrid;
