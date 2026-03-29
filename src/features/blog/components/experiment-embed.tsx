import { Suspense, lazy } from "react";
import { EditorialEmbed } from "./editorial-embed";
import type { ComponentType, LazyExoticComponent, ReactNode } from "react";
import type {
  EditorialEmbedFrame,
  EditorialEmbedLayout,
} from "./editorial-embed";
import { blogExperimentRegistry } from "@/features/blog/lib/blog-experiment-registry";
import { cn } from "@/lib/utils";

type ExperimentComponentProps = Record<string, unknown>;
type BlogExperimentId = keyof typeof blogExperimentRegistry;

const experimentComponentCache = new Map<
  BlogExperimentId,
  LazyExoticComponent<ComponentType<ExperimentComponentProps>>
>();

type ExperimentEmbedProps = {
  id: BlogExperimentId;
  experimentProps?: ExperimentComponentProps;
  layout?: EditorialEmbedLayout;
  frame?: EditorialEmbedFrame;
  caption?: ReactNode;
  note?: ReactNode;
  fallback?: ReactNode;
  className?: string;
  stageClassName?: string;
};

function getLazyExperimentComponent(id: BlogExperimentId) {
  const cachedComponent = experimentComponentCache.get(id);
  if (cachedComponent) return cachedComponent;

  const lazyComponent = lazy(blogExperimentRegistry[id].load);
  experimentComponentCache.set(id, lazyComponent);

  return lazyComponent;
}

export function ExperimentEmbed({
  id,
  experimentProps,
  layout,
  frame,
  caption,
  note,
  fallback,
  className,
  stageClassName,
}: ExperimentEmbedProps) {
  const entry = blogExperimentRegistry[id];
  const LazyExperiment = getLazyExperimentComponent(id);
  const suspenseFallback = fallback ?? entry.fallback;

  return (
    <EditorialEmbed
      layout={layout ?? entry.defaultLayout}
      frame={frame ?? entry.defaultFrame}
      caption={caption ?? entry.defaultCaption}
      note={note ?? entry.defaultNote}
      className={className}
      stageClassName={cn(entry.defaultStageClassName, stageClassName)}
    >
      <Suspense fallback={suspenseFallback}>
        <LazyExperiment {...experimentProps} />
      </Suspense>
    </EditorialEmbed>
  );
}
