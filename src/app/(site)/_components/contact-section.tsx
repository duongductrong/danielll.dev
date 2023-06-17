import Button from "@/components/buttons/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FC } from "react";

export interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = (props) => {
  return (
    <div className="w-full">
      <p className="mb-4 text-lg font-semibold uppercase">Contact</p>
      <h2 className="text-6xl mb-4 font-normal leading-tight">
        Start a conversation.
      </h2>
      <p className="text-xl text-gray-800 dark:text-gray-200 font-normal mb-12">
        Get in touch if you want to discuss your project, <br />
        learn more about my methodologies, or just to say hello!
      </p>
      <Button rounded="base" color="base" className="min-w-[170px] mb-8">
        Get in touch <ArrowRight className="w-4 h-4 ml-2" />
      </Button>

      <div className="flex items-center gap-6">
        <div className="inline-flex items-center gap-2">
          <ArrowUpRight className="w-4 h-4" />
          Linked In
        </div>
        <div className="inline-flex items-center gap-2">
          <ArrowUpRight className="w-4 h-4" />
          Twitter
        </div>
        <div className="inline-flex items-center gap-2">
          <ArrowUpRight className="w-4 h-4" />
          Github
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
