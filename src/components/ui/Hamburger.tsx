import gsap from "gsap";
import { cn, } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useGSAP } from "@gsap/react";
import { ComponentPropsWithRef, useEffect, useRef, useState } from "react";


export const Hamburger = ({ className, ...props }: ComponentPropsWithRef<"div">) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const primaryBg: gsap.TweenValue = gsap.getProperty(document.documentElement, ("--color-primary"))
  const tl = useRef<gsap.core.Timeline | null>(null)
  const burgerRef = useRef<HTMLDivElement | null>(null);
  const burgerLinesRef = useRef<SVGSVGElement | null>(null);
  const closeButtonRef = useRef<SVGSVGElement | null>(null);
  const navLinksRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = () => {
    setIsMenuActive(false);
  }

  useGSAP(() => {
    if (!burgerRef.current) return

    // SET REFS
    navLinksRef.current = burgerRef.current.previousElementSibling as HTMLDivElement;
    logoRef.current = navLinksRef.current.previousElementSibling as HTMLAnchorElement;


    logoRef.current.addEventListener("click", handleClick);
    navLinksRef.current.childNodes.forEach(el => {
      el.addEventListener("click", handleClick);
    })

    // SET DEFAULT STATES
    gsap.set(navLinksRef.current, {
      left: "-999px",
      opacity: 0
    })
    gsap.set(navLinksRef.current.children, {
      x: -50,
      opacity: 0
    })

    // ANIMATE HEADER
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
        navLinksRef.current,
        {
          duration: .1,
          width: "100%",
          left: 0,
          opacity: 1
        },
        "-=.2"
      )
      .to(
        logoRef.current,
        {
          color: primaryBg
        },
        "-=.2"
      )
      .to(
        navLinksRef.current.children,
        {
          x: 0,
          duration: .2,
          opacity: 1,
          stagger: .05
        }, "-=.2")
      .to(
        closeButtonRef.current,
        {
          duration: .15,
          display: "block",
          opacity: 1,
          padding: "3px",
          borderRadius: "50%",
          backgroundColor: primaryBg
        }, "-=.6")

    return () => {
      logoRef.current?.removeEventListener("click", handleClick);
      navLinksRef.current?.childNodes.forEach(el => {
        el.removeEventListener("click", handleClick);
      })
    }
  }, [])


  useEffect(() => {
    if (!tl.current) return

    if (isMenuActive) {
      // DISABLE SCROLLING
      document.documentElement.style.overflow = "hidden";
      tl.current.play()
    } else {
      document.documentElement.style.overflow = "auto";
      tl.current.reversed(!tl.current.reversed())
    }

  }, [isMenuActive])

  return (
    <div
      ref={burgerRef}
      className={cn("w-6 h-4 flex flex-col justify-between", className)}
      onClick={() => setIsMenuActive((prev: boolean) => !prev)}
      {...props}
    >
      <div className="relative">
        <Menu ref={burgerLinesRef} />
        <X ref={closeButtonRef} className="menuClose absolute top-0 hidden opacity-0 rotate-180" />
      </div>
    </div>
  );
};
