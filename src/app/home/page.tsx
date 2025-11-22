/* eslint-disable @typescript-eslint/no-unused-vars */
import { CraftingInterfaces, WarmWelcome } from "@/features/moodboard";
import { Manifesto } from "@/features/moodboard/widgets/manifesto";
import { AppLayoutV2 } from "@/layouts/v2";

type Props = {};

const Page = (props: Props) => {
  return (
    <AppLayoutV2>
      <WarmWelcome />
      <CraftingInterfaces className="mt-[35vh]" />
      <Manifesto className="mt-20" />
    </AppLayoutV2>
  );
};

export default Page;
