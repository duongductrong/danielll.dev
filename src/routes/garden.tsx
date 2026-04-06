import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, EditorialSection } from "@/components/editorial-layout";
import { PixelGardenCanvas } from "@/features/garden/components/pixel-garden-canvas";
import { GARDEN_OBJECTS } from "@/features/garden/utils/garden-world-config";

export const Route = createFileRoute("/garden")({ component: GardenPage });

function GardenPage() {
  return (
    <EditorialPage>
      <EditorialSection width="reading">
        <div className="mb-6 text-center font-mono">
          <h1 className="mb-2 font-mono text-[15px] font-semibold tracking-[-0.015em]">
            Garden
          </h1>
          <p className="text-[13px] text-black/40">
            a small terrarium on the internet — codex, claude, cat, and a tiny sword
            dino live here
            between the pixels, doing nothing in particular.
          </p>
        </div>
      </EditorialSection>

      <div className="mx-auto w-full px-4">
        <PixelGardenCanvas objects={GARDEN_OBJECTS} />
      </div>

      <EditorialSection width="reading">
        <p className="mt-6 text-center font-mono text-[12px] text-black/30">
          Every sprite is hand-pixeled and rendered rect by rect — no images,
          just math and a little patience.
        </p>
      </EditorialSection>
    </EditorialPage>
  );
}
