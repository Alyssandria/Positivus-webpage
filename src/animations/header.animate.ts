import { useEffect, useRef } from "react"
import { useScrollDirection } from "../hooks/useScrollDirection";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";

export const useHideOnScrollDown = () => {
  const header = useRef<HTMLElement | null>(null);
  const scrollDir = useScrollDirection();
  const timeline = useRef<gsap.core.Timeline | null>(null);

  console.log(header.current);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    if (!header.current) return;
    gsap.set(header.current, { opacity: 1, display: "block" })
    timeline.current =
      gsap.timeline({ paused: true })
        .to(header.current, { duration: .2, y: 0, yPercent: -100, })
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
