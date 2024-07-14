/* eslint-disable react/no-unescaped-entities */

import { ArrowRight } from "lucide-react";

type Props = {};

const Labs = (props: Props) => {
  return (
    <div className="font-geist-mono flex items-center justify-center h-lvh w-full bg-[#F7F6F4]">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-center">
          Hello, i'm Dan, <br /> and this's my ui labs
        </h2>
      </div>
    </div>
  );
};

export default Labs;
