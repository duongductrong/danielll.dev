import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export interface TimezoneProps extends ComponentPropsWithoutRef<"section"> {}

const Timezone = ({ className, ...props }: TimezoneProps) => {
  return (
    <section {...props} className={cn("container text-center", className)}>
      <p className="text-xl font-semibold mb-1">Based in HCMC, Vietnam.</p>
      <p className="text-muted-foreground font-light">
        Local time:{" "}
        {new Date().toLocaleTimeString("vi-VN", {
          timeZone: "Asia/Ho_Chi_Minh",
          timeZoneName: "longOffset",
        })}
      </p>
    </section>
  );
};

export default Timezone;
