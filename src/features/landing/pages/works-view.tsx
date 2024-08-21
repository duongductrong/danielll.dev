"use client";

import WorksFooter from "../components/works-footer";
import WorksHeader from "../components/works-header";
import { WorksSelected } from "../components/works-selected";

export interface WorksViewProps {}

export const WorksView = (props: WorksViewProps) => {
  return (
    <section className="text-center">
      <WorksHeader className="mb-10" />
      <WorksSelected />
      <WorksFooter className="mt-10 pb-10" />
    </section>
  );
};
