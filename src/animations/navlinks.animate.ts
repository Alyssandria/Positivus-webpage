import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap"

export const useNavLinksAnimation = (isActive: boolean) => {
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    if (!linksRef.current) return
    if (!logoRef.current) return

    const primaryBg = gsap.getProperty(document.documentElement, ("--color-primary"));
    gsap.set(linksRef.current, { opacity: 0 });
    gsap.set(logoRef.current, { color: "black" })
    timeline.current = gsap.timeline({ paused: true })
      .to(linksRef.current, { duration: .2, width: "100%", opacity: 1, overflow: "hidden", position: "fixed" })
      .to(logoRef.current, { duration: .1, color: primaryBg })
      .from(linksRef.current.children, { duration: 0.1, opacity: 0, y: 10, stagger: { amount: .2 } })
  }, []);

  useEffect(() => {
    if (!timeline.current) return

    if (isActive) {
      timeline.current.play()
    } else {
      timeline.current.reversed(!timeline.current.reversed())
    }
  }, [isActive])

  return { linksRef, logoRef }
}
