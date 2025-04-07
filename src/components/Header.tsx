import { LogoIcon } from "./icons/Logo"
import { Link } from "./ui/Link"
import content from "../lib/content/en_us.json"
import { useEffect, useMemo, useState } from "react"
import { Hamburger } from "./ui/Hamburger"
import { useNavLinksAnimation } from "../animations/navlinks.animate"
import { useHideOnScrollDown } from "../animations/header.animate"
import { cn } from "@/lib/utils"

type NavLinksJSON = {
  CONTENT: string;
  PATH: string;
}

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const headerRef = useHideOnScrollDown();
  const { linksRef, logoRef } = useNavLinksAnimation(isMenuActive)

  // DISABLE SCROLLING IF MENU IS ACTIVE
  useEffect(() => {
    if (isMenuActive) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isMenuActive])

  // MEMOIZE navlinksArr
  const linksArr: NavLinksJSON[] = useMemo(() => {
    return Object.entries(content.PUBLIC.HEADER.NAV).filter(el => el[0] !== "LOGO").map(el => el[1]);
  }, [])

  const links = linksArr.map(el => {
    return (
      el.CONTENT === content.PUBLIC.HEADER.NAV.REQUEST.CONTENT
        ?
        <Link to={el.PATH} tabIndex={isMenuActive ? 0 : -1} onClick={() => setIsMenuActive(false)} key={el.PATH}>
          {el.CONTENT}
        </Link >
        :
        <Link tabIndex={isMenuActive ? 0 : -1} to={el.PATH} onClick={() => setIsMenuActive(false)} key={el.PATH}>
          {el.CONTENT}
        </Link>
    )
  })

  return (
    <header ref={headerRef} className="h-[10svh] sticky p-4 z-10 top-0 bg-white">
      <nav className="w-full h-full flex justify-between items-center">
        <ul className="flex justify-between items-center w-full h-full">
          <Link to={content.PUBLIC.HEADER.NAV.LOGO.PATH} className="z-10 w-32 text-black inline-flex flex-row items-center justify-center" onClick={() => setIsMenuActive(false)}>
            <LogoIcon ref={logoRef} />
          </Link>

          <div ref={linksRef} className={cn("fixed flex flex-col p-4 justify-center gap-4 h-full bg-secondary w-1 bottom-0 left-[-999px]")}>
            {links}
          </div>
          <Hamburger setIsActive={setIsMenuActive} isActive={isMenuActive} />
        </ul>
      </nav>
    </header>
  )
}
