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
      <IdentifyCard className="my-10 lg:hidden" />
      <CraftingInterfaces
        className="lg:mt-[35vh]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      <Manifesto
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
    </AppLayoutV2>
  );
};

export default Page;
