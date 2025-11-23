/* eslint-disable @typescript-eslint/no-unused-vars */
import { CraftingInterfaces, WarmWelcome } from "@/features/moodboard";
import IdentifyCard from "@/features/moodboard/components/identify-card";
import { Manifesto } from "@/features/moodboard/widgets/manifesto";
import { AppLayoutV2 } from "@/layouts/v2";

type Props = {};

const Page = (props: Props) => {
  return (
    <AppLayoutV2>
      <WarmWelcome />
      <IdentifyCard className="lg:hidden my-10" />
      <CraftingInterfaces className="lg:mt-[35vh]" />
      <Manifesto className="mt-20" />
    </AppLayoutV2>
  );
};

export default Page;
