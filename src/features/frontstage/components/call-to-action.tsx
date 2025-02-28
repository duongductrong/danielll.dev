import InboxIcon from "@/components/icons/inbox-icon";
import SaveItemsIcon from "@/components/icons/save-items-icon";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export interface CallToActionProps extends ComponentProps<"section"> {}

const CallToAction = ({ className, ...props }: CallToActionProps) => {
  return (
    <section {...props} className={cn("flex items-center gap-4", className)}>
      <Button as={Link} href="https://cal.com/duongductrong" target="_blank">
        <SaveItemsIcon className="size-4 mr-1" />
        Available for new opportunities
      </Button>
      <Text variant="body" className="text-muted uppercase">
        Or
      </Text>
      <Button as={Link} href="mailto:duongductrong06@gmail.com">
        <InboxIcon className="size-4 mr-1" />
        Email me
      </Button>
    </section>
  );
};

export default CallToAction;
