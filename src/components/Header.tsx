import { LogoIcon } from "./icons/Logo"
import { Link } from "./ui/Link"
import content from "../lib/content/en_us.json"
import { useEffect, useRef, } from "react"
import { Hamburger } from "./ui/Hamburger"
import { useHideOnScrollDown } from "../animations/header.animate"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import CONTENT from "@/lib/content/en_us.json"
import { cn } from "@/lib/utils"

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const headerRef = useHideOnScrollDown();
  const navigationRef = useRef<HTMLUListElement | null>(null);
  const LOGO = CONTENT.PUBLIC.NAVIGATION.map((el) => {
    return (
      el.CONTENT === "LOGO" && (
        (
          <Link to={el.PATH} key={el.CONTENT} className={cn("z-10 w-32 text-black inline-flex flex-row items-center justify-center p-0")}>
            <LogoIcon />
          </Link>
        )
      )
    )
  })
  const NAVLINKS = content.PUBLIC.NAVIGATION.map((el) => {
    return (
      el.CONTENT !== "LOGO" &&
      <Link linkStyle={el.CONTENT === "Request a quote" && !isMobile ? "button" : "default"} to={el.PATH} key={el.CONTENT} className={cn(window.location.pathname === el.PATH ? "nav-links-active" : "", "text-lg text-white font-medium sm:text-5xl lg:text-black lg:font-normal lg:text-lg")}>
        {el.CONTENT}
      </Link >
    )
  })

  useEffect(() => {
    if (!headerRef.current) return;
  }, [headerRef]);

  return (
    <header ref={headerRef} className="site sticky h-fit p-4 z-10 top-0 bg-white sm:p-8 sm:py-4">
      <nav className="w-full h-full flex justify-between items-center">
        <ul ref={navigationRef} className="navigation flex justify-between items-center w-full h-full gap-4">
          {LOGO}
          <div className="fixed flex flex-col p-4 justify-center gap-4 h-full bg-secondary w-1 bottom-0 sm:gap-8 lg:relative lg:w-fit lg:items-center lg:flex-row lg:bg-transparent">
            {NAVLINKS}
          </div>
          {isMobile &&
            <Hamburger />
          }
        </ul>
      </nav>
    </header>
  )
}
