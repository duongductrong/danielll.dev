import GetInTouch from "@/features/folio/widgets/get-in-touch";
import Header from "@/features/folio/widgets/header";
import MyCard from "@/features/folio/widgets/my-card";
import PenGrid from "@/features/folio/widgets/pen-grid";
import ThingIDo from "@/features/folio/widgets/thing-i-do";
import Timezone from "@/features/folio/widgets/timezone";
import Welcome from "@/features/folio/widgets/welcome";

export default function Page() {
  return (
    <>
      <Header className="mb-4 mt-10" />
      <Welcome className="mb-4" />
      <Timezone className="mb-4" />
      <GetInTouch className="mb-20" />
      <PenGrid className="mb-20" />
      <ThingIDo className="mb-20" />
      <MyCard />
    </>
  );
}
