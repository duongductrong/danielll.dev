/* eslint-disable @typescript-eslint/no-unused-vars */
import { CraftingInterfaces, WarmWelcome } from "@/features/moodboard";
import { AppLayoutV2 } from "@/layouts/v2";

type Props = {};

const Page = (props: Props) => {
  return (
    <AppLayoutV2>
      <WarmWelcome className="mb-[70vh]" />
      <CraftingInterfaces className="mb-[70vh]" />
    </AppLayoutV2>
  );
};

export default Page;
