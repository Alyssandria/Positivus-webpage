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
        <Link linkStyle="button" href={link.PATH} key={link.PATH}>
          {link.CONTENT}
        </Link >
        :
        <Link href={link.PATH} key={link.PATH}>
          {link.CONTENT}
        </Link>
    )
  })
  // TODO: ANIMATE NAVLINKS
  gsap.registerPlugin(useGSAP);
  const NavLinksRef = useRef<HTMLUListElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  useGSAP(() => {
    console.log(NavLinksRef)
    timeline.current = gsap.timeline({ paused: true })
      .to(NavLinksRef.current, { duration: .5, width: "100%", height: "100%" })
  }, []);

  useEffect(() => {
    if (!timeline.current) return
    if (isActive) {
      timeline.current.play()
    } else {
      timeline.current.reversed(!timeline.current.reversed())
    }
  }, [isActive])

  return (
    <>
      <ul ref={NavLinksRef} className={cn("absolute bg-blue-300 top-0 right-0 size-1", isActive ? "" : "opacity-0", "nav-links", className)} {...props}>
        {links}
      </ul>
      <Hamburger setIsActive={setIsActive} isActive={isActive} />
    </>
  )
}
