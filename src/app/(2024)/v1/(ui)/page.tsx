import About from "../_components/customs/about";
import Cta from "../_components/customs/cta";
import GetInTouch from "../_components/customs/get-in-touch";
import ThingIDo from "../_components/customs/thing-i-do";
import Timezone from "../_components/customs/timezone";
import Welcome from "../_components/customs/welcome";

export interface PageProps {}

const Page = (props: PageProps) => {
  return (
    <>
      <Welcome className="mt-4" />
      <Cta className="mt-10" />
      <Timezone className="mt-10" />
      <GetInTouch className="mt-8" />
      <ThingIDo className="mt-20" />
      <About className="mt-20" />
    </>
  );
};

export default Page;
