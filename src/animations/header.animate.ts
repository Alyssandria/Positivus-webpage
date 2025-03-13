import { useEffect, useRef } from "react"
import { useScrollDirection } from "../hooks/useScrollDirection";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";

export const useHideOnScrollDown = () => {
  const header = useRef<HTMLElement | null>(null);
  const scrollDir = useScrollDirection();
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const removeStack = () => {
    header.current!.style.transform = "none"
  }
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    if (!header.current) return;

    timeline.current =
      gsap.timeline({ paused: true, onReverseComplete: removeStack })
        .to(header.current, { duration: .2, yPercent: -100, opacity: 0, })
  })

  useEffect(() => {
    if (!timeline.current) return;

    // DOWN SCROLL
    if (scrollDir === -1) {
      timeline.current.play();
    } else {
      timeline.current.reversed(!timeline.current.reversed());
    }
  }, [scrollDir])

  return header;
}
