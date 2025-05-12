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
    gsap.set(contentRef.current, {
      position: "absolute",
      visibility: "hidden",
      height: "1px",
      opacity: 0,
      marginTop: "2rem",
      borderTop: "1px solid black"
    })

    timeline.current = gsap.timeline({ paused: true })
      .set(contentRef.current, {
        position: "absolute"
      })
      .to(accordionItemRef.current, {
        duration: .1,
        backgroundColor: primaryBG,
      })
      .to(plusIconRef.current, {
        duration: .1,
        rotate: 90,
        display: "none"
      })
      .to(minusIconRef.current, {
        duration: .1,
        display: "block"
      })
      .to(contentRef.current, {
        duration: .3,
        position: "relative",
        visibility: "visible",

        height: "auto",
      }, "-=.1")
      .to(contentRef.current, {
        duration: .1,
        opacity: 1
      }, "+=.05")
  })


  useEffect(() => {
    if (!timeline.current) return;

    if (isActive) {
      timeline.current.play();
    } else {
      timeline.current.reversed(!timeline.current.reversed());
    }
  }, [isActive])

  return { contentRef, accordionItemRef, plusIconRef, minusIconRef, setIsActive };
}
