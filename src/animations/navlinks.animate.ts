import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap"

export const useNavLinksAnimation = (isActive: boolean) => {
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    if (!linksRef.current) return
    gsap.set(linksRef.current, { opacity: 0 })
    timeline.current = gsap.timeline({ paused: true })
      .to(linksRef.current, { duration: .2, width: "100%", opacity: 1 })
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

  return { linksRef }
}
