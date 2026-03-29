import { InteractiveConferenceBadge } from "@/features/home/components/interactive-conference-badge";

export default function InteractiveConferenceBadgeExperiment() {
  return (
    <div className="[container-type:inline-size] w-full">
      <div className="mx-auto w-[clamp(14rem,42cqw,23rem)]">
        <InteractiveConferenceBadge className="h-auto w-full" />
      </div>
    </div>
  );
}
