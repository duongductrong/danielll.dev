import { LabPerspective } from "@/components/lab-perspective";
import { Radio3d, RadioPerspective } from "@/features/lab/pages/radio";

const RadioPage = () => {
  return (
    <LabPerspective>
      <RadioPerspective>
        <Radio3d />
      </RadioPerspective>
    </LabPerspective>
  );
};

export default RadioPage;
