/* eslint-disable @typescript-eslint/no-unused-vars */
import About from "../components/about";
import Cta from "../components/cta";
import Footer from "../components/footer";
import GetInTouch from "../components/get-in-touch";
import Header from "../components/header";
import ThingIDo from "../components/thing-i-do";
import Timezone from "../components/timezone";
import Welcome from "../components/welcome";

export interface FormalProps {}

const Formal = (props: FormalProps) => {
  return (
    <>
      <Header />
      <Welcome className="mt-4" />
      <Cta className="mt-10" />
      <Timezone className="mt-10" />
      <GetInTouch className="mt-8" />
      <ThingIDo className="mt-20" />
      {/* <About className="mt-20" /> */}
      <Footer />
    </>
  );
};

export default Formal;
