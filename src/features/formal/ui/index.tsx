/* eslint-disable @typescript-eslint/no-unused-vars */
import About from "../components/customs/about";
import Cta from "../components/customs/cta";
import Footer from "../components/customs/footer";
import GetInTouch from "../components/customs/get-in-touch";
import Header from "../components/customs/header";
import ThingIDo from "../components/customs/thing-i-do";
import Timezone from "../components/customs/timezone";
import Welcome from "../components/customs/welcome";

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
      <About className="mt-20" />
      <Footer />q
    </>
  );
};

export default Formal;
