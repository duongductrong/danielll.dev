/* eslint-disable @typescript-eslint/no-unused-vars */
import { WelcomeMoodBoard } from "@/features/moodboard";
import { AppLayoutV2 } from "@/layouts/v2";

type Props = {};

const Page = (props: Props) => {
  return (
    <AppLayoutV2>
      <WelcomeMoodBoard className="mb-[70vh]" />
    </AppLayoutV2>
  );
};

export default Page;
