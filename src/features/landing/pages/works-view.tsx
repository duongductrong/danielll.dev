"use client";

import { pageContent } from "@/enums/page-content";
import WorksFooter from "../components/works-footer";
import WorksHeader from "../components/works-header";
import { WorksSelected, WorksSelectedItem } from "../components/works-selected";

export interface WorksViewProps {}

export const WorksView = (props: WorksViewProps) => {
  return (
    <>
      <WorksHeader className="mb-10" />
      <WorksSelected>
        {pageContent.participated.map((participated, idx) => (
          <WorksSelectedItem
            key={participated.id}
            participated={participated}
            index={idx}
          />
        ))}
      </WorksSelected>
      <WorksFooter className="mt-10 pb-10" />
    </>
  );
};
