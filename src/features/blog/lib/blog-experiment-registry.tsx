import type { ComponentType, ReactNode } from "react";
import type {
  EditorialEmbedFrame,
  EditorialEmbedLayout,
} from "@/features/blog/components/editorial-embed";

type ExperimentModule = {
  default: ComponentType<Record<string, unknown>>;
};

export type BlogExperimentEntry = {
  load: () => Promise<ExperimentModule>;
  defaultLayout?: EditorialEmbedLayout;
  defaultFrame?: EditorialEmbedFrame;
  defaultCaption?: ReactNode;
  defaultNote?: ReactNode;
  defaultStageClassName?: string;
  fallback?: ReactNode;
};

export const blogExperimentRegistry = {
  "interactive-conference-badge": {
    load: () =>
      import("../experiments/interactive-conference-badge-experiment"),
    defaultLayout: "wide",
    defaultFrame: "dark-stage",
    defaultCaption:
      "A live UI experiment staged inside the article instead of being linked away to a separate demo.",
    defaultNote:
      "CSS/SVG plus motion. No Three.js or WebGL. Hover or drag the badge.",
    defaultStageClassName: "min-h-[28rem] sm:min-h-[36rem]",
    fallback: (
      <span className="text-[11px] font-medium tracking-[0.24em] text-white/50 uppercase">
        Loading experiment
      </span>
    ),
  },
} satisfies Record<string, BlogExperimentEntry>;

export type BlogExperimentId = keyof typeof blogExperimentRegistry;
