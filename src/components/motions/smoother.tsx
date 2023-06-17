"use client";

import { Slot } from "@radix-ui/react-slot";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { debounce } from "lodash";
import {
  FC,
  ForwardRefExoticComponent,
  HTMLAttributes,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import SmootherScrollSection, {
  SmootherScrollSectionProps,
} from "./smoother-scroll-section";
import InitPageSplash from "../loadings/init-page-splash";

gsap.registerPlugin(ScrollTrigger);

export interface SmootherProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {
  asChild?: boolean;
  options?: LocomotiveScroll.InstanceOptions;
}

export interface SmootherRootProps extends FC<SmootherProps> {
  ScrollSection: ForwardRefExoticComponent<SmootherScrollSectionProps>;
}

const Smoother: SmootherRootProps = ({ asChild, options, children }) => {
  const Comp = asChild ? Slot : "div";
  const containerRef = useRef<HTMLDivElement>(null);

  const [isReadyForScroll, setIsReadyForScroll] = useState(false);

  const handleLocomotiveScroll = useCallback(
    ($el: HTMLElement) => {
      if ($el) {
        return new LocomotiveScroll({
          smooth: true,
          ...options,
          el: $el,
        });
      }

      return null;
    },
    [JSON.stringify(options)]
  );

  const handleWaitingLocoScrollIsReady = (_locoScroll: LocomotiveScroll) => {
    setIsReadyForScroll(false);

    _locoScroll.on(
      "scroll",
      debounce(() => {
        setIsReadyForScroll(true);
      }, 200)
    );
  };

  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerEl = containerRef.current;

      // Handle create instance locomotive scrolling
      const locoScroll = handleLocomotiveScroll(containerEl);

      if (locoScroll) {
        handleWaitingLocoScrollIsReady(locoScroll);

        // Trigger gsap scroll trigger updating by scroll event of loco scroll
        locoScroll.on("scroll", ScrollTrigger.update);

        // Add proxy for container element
        const scrollPinType = containerEl.style.transform
          ? "transform"
          : "fixed";
        ScrollTrigger.scrollerProxy(containerEl, {
          scrollTop(value) {
            return arguments.length
              ? (locoScroll as any).scrollTo(value, 0, 0)
              : (locoScroll as any).scroll?.instance.scroll.y;
          },

          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },

          pinType: scrollPinType,
        });

        const sections = document.querySelectorAll(".smoother-scroll-section");

        sections.forEach((section) => {
          const inner = section.querySelector(".section-inner");

          if (section.hasAttribute("data-scroll-horizontal")) {
            const scrollInSectionEl = section.querySelector(
              "[data-scroll-in-section]"
            );

            ScrollTrigger.create({
              scroller: containerEl,
              trigger: section,
              start: "center center",
              end: () => `+=${section.scrollWidth + window.innerHeight}`, // added an extra window.innerHeight to the end here in comparison to the tween
              pin: inner,
              pinSpacing: true,
              anticipatePin: 1,
              pinType: "transform",
            });

            gsap.to(scrollInSectionEl, {
              x: () =>
                `${-(
                  section.scrollWidth - document.documentElement.clientWidth
                )}px`,
              ease: "none",
              scrollTrigger: {
                trigger: scrollInSectionEl,
                scroller: containerEl,
                start: "center center",
                end: () => `+=${section.scrollWidth}`,
                scrub: true,
              },
            });
          }

          // Each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
          ScrollTrigger.addEventListener("refresh", () => {
            locoScroll.update();
          });

          // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
          ScrollTrigger.refresh();
        });
      }
    }
  }, [containerRef, handleLocomotiveScroll]);

  return (
    <>
      {!isReadyForScroll ? <InitPageSplash /> : null}
      <Comp ref={containerRef} data-scroll-container>
        {children}
      </Comp>
    </>
  );
};

Smoother.ScrollSection = SmootherScrollSection;

export default Smoother;
