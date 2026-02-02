import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export const useGsapWithLenis = (
  animationFn: () => void,
  deps: unknown[] = [],
  scope?: React.RefObject<HTMLElement | null>,
) => {
  useGSAP(
    () => {
      animationFn();
      ScrollTrigger.refresh();
    },
    { dependencies: deps, scope, revertOnUpdate: true },
  );
};
