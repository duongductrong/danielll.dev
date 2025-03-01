/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/ui/container";
import CallToAction from "../components/call-to-action";
import Contribution from "../components/contribution";
import GetInTouch from "../components/get-in-touch";
import Header from "../components/header";
import MyProjects from "../components/my-projects";
import SelfTalk from "../components/self-talk";

export interface FrontStageProps {}

const FrontStage = (props: FrontStageProps) => {
  return (
    <Container className="py-14">
      <Header />
      <SelfTalk className="mt-8" />
      <CallToAction className="mt-8" />
      <Contribution className="mt-10" />
      <GetInTouch className="mt-6" />
      <MyProjects className="mt-10" />
    </Container>
  );
};

export default FrontStage;
