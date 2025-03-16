import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import { gsap } from "gsap"

export const useBrandsAnimation = () => {
  const brandsRowUpper = useRef<HTMLDivElement | null>(null);
  const brandsRowLower = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    if (!brandsRowUpper || !brandsRowLower) return
    gsap.set(brandsRowLower.current, { xPercent: 100 });
    gsap.set(brandsRowUpper.current, { xPercent: -100 });
    gsap.to(brandsRowUpper.current, { duration: 25, xPercent: 100, repeat: -1, ease: 'none' });
    gsap.to(brandsRowLower.current, { duration: 25, xPercent: -100, repeat: -1, ease: "none" });
  })
  return { brandsRowLower, brandsRowUpper }
}
