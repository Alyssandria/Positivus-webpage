import gsap from "gsap";
import { cn, } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

interface HamburgerProps extends React.HTMLAttributes<HTMLDivElement> {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  isActive: boolean
}


export const Hamburger = ({ isActive, setIsActive, className, ...props }: HamburgerProps) => {

  const tl = useRef<gsap.core.Timeline | null>(null)
  const burgerLinesRef = useRef(null);
  const closeButtonRef = useRef(null);

  useGSAP(() => {
    const primaryBg: gsap.TweenValue = gsap.getProperty(document.documentElement, ("--color-primary"))

    tl.current = gsap.timeline({ paused: true })
      .to(
        burgerLinesRef.current,
        {
          duration: .3,
          rotate: 90,
          opacity: 0,
          display: "none"
        })
      .to(
        closeButtonRef.current,
        {
          duration: .15,
          display: "block",
          opacity: 1,
          padding: "3px",
          borderRadius: "50%",
          backgroundColor: primaryBg
        })
  }, [])

  useEffect(() => {
    if (!tl.current) return

    if (isActive) {
      tl.current.play()
    } else {
      tl.current.reversed(!tl.current.reversed())
    }

  }, [isActive])

  return (
    <div
      className={cn("w-6 h-4 flex flex-col justify-between", className)}
      onClick={() => setIsActive((prev: boolean) => !prev)}
      {...props}
    >
      <div className="relative">
        <Menu ref={burgerLinesRef} />

        <X ref={closeButtonRef} className="menuClose absolute top-0 hidden opacity-0 rotate-180" />
      </div>
    </div>
  );
};
