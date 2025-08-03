/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer from "../components/footer";
import GetInTouch from "../components/get-in-touch";
import Header from "../components/header";
import MyCard from "../components/my-card";
import ThingIDo from "../components/thing-i-do";
import Timezone from "../components/timezone";
import Welcome from "../components/welcome";

export interface GardenProps {}

const Garden = (props: GardenProps) => {
  return (
    <>
      <Header />
      <Welcome className="mt-4" />
      {/* <Cta className="mt-10" /> */}
      <Timezone className="mt-10" />
      <GetInTouch className="mt-8" />
      <ThingIDo className="mt-20" />
      {/* <About className="mt-20" /> */}
      <Footer />
      <MyCard />
    </>
  );
};

export default Garden;
