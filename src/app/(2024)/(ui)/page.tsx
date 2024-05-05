import ThingIDo from "../_components/customs/thing-i-do";
import Timezone from "../_components/customs/timezone";
import Welcome from "../_components/customs/welcome";

export interface PageProps {}

const Page = (props: PageProps) => {
  return (
    <>
      <Welcome className="mt-6" />
      <Timezone className="mt-20" />
      <ThingIDo className="mt-20" />
    </>
  );
};

export default Page;
