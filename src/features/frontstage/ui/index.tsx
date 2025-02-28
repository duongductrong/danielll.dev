/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/ui/container";
import CallToAction from "../components/call-to-action";
import Header from "../components/header";
import SelfTalk from "../components/self-talk";
import Contribution from "../components/contribution";
import GetInTouch from "../components/get-in-touch";

export interface FrontStageProps {}

const FrontStage = (props: FrontStageProps) => {
  return (
    <Container className="py-14">
      <Header />
      <SelfTalk className="mt-8" />
      <CallToAction className="mt-8" />
      <Contribution className="mt-10" />
      <GetInTouch className="mt-6" />
    </Container>
  );
};

export default FrontStage;
