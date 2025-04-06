import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react";

export const useAccordionAnimation = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const accordionItemRef = useRef<HTMLButtonElement | null>(null);
  const plusIconRef = useRef<SVGSVGElement | null>(null);
  const minusIconRef = useRef<SVGSVGElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(useGSAP);
  const primaryBG: gsap.TweenValue = gsap.getProperty(document.documentElement, ("--color-primary"));

  useGSAP(() => {
    if (!accordionItemRef.current || !contentRef.current || !plusIconRef.current) return;


    timeline.current = gsap.timeline({ paused: true })
      .to(accordionItemRef.current, {
        duration: .1,
        backgroundColor: primaryBG,
      })
      .to(plusIconRef.current, {
        duration: .2,
        rotate: 90,
        display: "none"
      }).to(minusIconRef.current, {
        duration: .2,
        display: "block"
      })
      .to(contentRef.current, {
        duration: .3,
        marginTop: "2rem",
        borderTop: "2px solid black",
        paddingTop: "1em",
        position: "relative",
        display: "block",
        maxHeight: function() {
          return `${contentRef.current!.scrollHeight}px`
        },
        visibility: "visible",
      }, "-=.5")
  })

  useEffect(() => {
    if (!timeline.current) return;

    if (isActive) {
      contentRef.current?.setAttribute("aria-hidden", "false");
      timeline.current.play();
      contentRef.current?.setAttribute("aria-hidden", "true");
    } else {
      timeline.current.reversed(!timeline.current.reversed());
    }
  }, [isActive])

  return { contentRef, accordionItemRef, plusIconRef, minusIconRef, setIsActive };
}
