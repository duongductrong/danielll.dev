import PenGrid from "@/features/folio/widgets/pen-grid";
import GetInTouch from "@/features/folio/widgets/get-in-touch";
import Header from "@/features/folio/widgets/header";
import Timezone from "@/features/folio/widgets/timezone";
import Welcome from "@/features/folio/widgets/welcome";
import MyCard from "@/features/folio/widgets/my-card";

export default function Page() {
  return (
    <>
      <Header className="mb-4 mt-10" />
      <Welcome className="mb-4" />
      <Timezone className="mb-4" />
      <GetInTouch className="mb-20" />
      <PenGrid className="mb-20" />
      <MyCard />
    </>
  );
}
