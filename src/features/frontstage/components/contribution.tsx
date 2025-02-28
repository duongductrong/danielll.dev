"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import GitHubCalendar from "react-github-calendar";

export interface ContributionProps extends ComponentProps<"section"> {}

const Contribution = ({ className, ...props }: ContributionProps) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://github-contributions-api.jogruber.de/v4/duongductrong?y=2024&y=2025"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setData(data.contributions));
  // }, []);

  // console.log(data);

  // if (data.length === 0) return null;

  return (
    <section
      {...props}
      className={cn("flex items-center gap-4 grayscale", className)}
    >
      {/* https://github-contributions-api.jogruber.de/v4/duongductrong */}
      {/* <ReactActivityCalendar data={data} blockSize={10} /> */}
      <GitHubCalendar
        year="last"
        username="duongductrong"
        colorScheme="dark"
        blockSize={9}
        blockMargin={3}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "12px!important",
          color: "hsl(0 0% 98%)",
        }}
      />
    </section>
  );
};

export default Contribution;
