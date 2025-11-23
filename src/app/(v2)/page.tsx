/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CraftingInterfaces,
  IdentifyCard,
  Manifesto,
  WarmWelcome,
} from "@/ui/home";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
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
    </>
  );
};

export default Page;
