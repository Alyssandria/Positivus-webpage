import { Link } from "../ui/Link"
import content from "../../lib/content/en_us.json"
import { HTMLAttributes, useEffect, useRef, useState } from "react"
import { cn } from "../../lib/utils";
import { Hamburger } from "./Hamburger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const NavLinks = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // NAVLINKS
  const linkArr = Object.entries(content.public.header.nav).filter(el => el[0] !== "LOGO")
  const links = linkArr.map(el => {
    const link = el[1];
    return (
      el[0] === "REQUEST"
        ?
        <Link linkStyle="button" href={link.PATH} tabIndex={isActive ? 0 : -1} key={link.PATH}>
          {link.CONTENT}
        </Link >
        :
        <Link tabIndex={isActive ? 0 : -1} href={link.PATH} key={link.PATH}>
          {link.CONTENT}
        </Link>
    )
  })
  // TODO: ANIMATE NAVLINKS
  gsap.registerPlugin(useGSAP);
  const NavLinksRef = useRef<HTMLUListElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  useGSAP(() => {
    if (!NavLinksRef.current) return
    gsap.set(NavLinksRef.current, { opacity: 0 })
    timeline.current = gsap.timeline({ paused: true })
      .to(NavLinksRef.current, { duration: .5, width: "100%", opacity: 1 })
      .fromTo(
        gsap.utils.toArray(NavLinksRef.current.children), // Select child elements (links)
        { opacity: 0, y: 20 }, // Start state
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.3 }, // End state
        "-=0.3" // Overlap with menu animation
      );
  }, []);

  useEffect(() => {
    if (!timeline.current) return
    if (isActive) {
      timeline.current.play()
    } else {
      timeline.current.reverse()
    }
  }, [isActive])

  return (
    <>
      <ul ref={NavLinksRef} className={cn("absolute bg-blue-300 top-0 right-0 h-full w-1", className)} {...props}>
        {links}
      </ul>
      <Hamburger setIsActive={setIsActive} isActive={isActive} />
    </>
  )
}
