import { LogoIcon } from "./icons/Logo"
import { Link } from "./ui/Link"
import content from "../lib/content/en_us.json"
import { useMemo, useState } from "react"
import { Hamburger } from "./ui/Hamburger"
import { useNavLinksAnimation } from "../animations/navlinks.animate"
import { useHideOnScrollDown } from "../animations/header.animate"

type NavLinksJSON = {
  CONTENT: string;
  PATH: string;
}

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const headerRef = useHideOnScrollDown();
  const { linksRef, logoRef } = useNavLinksAnimation(isActive)

  // MEMOIZE navlinksArr
  const linksArr: NavLinksJSON[] = useMemo(() => {
    return Object.entries(content.PUBLIC.HEADER.NAV).filter(el => el[0] !== "LOGO").map(el => el[1]);
  }, [])

  const links = linksArr.map(el => {
    return (
      el.CONTENT === content.PUBLIC.HEADER.NAV.REQUEST.CONTENT
        ?
        <Link to={el.PATH} tabIndex={isActive ? 0 : -1} onClick={() => setIsActive(false)} key={el.PATH}>
          {el.CONTENT}
        </Link >
        :
        <Link tabIndex={isActive ? 0 : -1} to={el.PATH} onClick={() => setIsActive(false)} key={el.PATH}>
          {el.CONTENT}
        </Link>
    )
  })

  return (
    <header ref={headerRef} className="h-[8svh] sticky top-0 bg-white">
      <nav className="w-full h-full flex justify-between items-center">
        <Link to={content.PUBLIC.HEADER.NAV.LOGO.PATH} className="z-10 w-32 text-black inline-flex flex-row items-center justify-center" onClick={() => setIsActive(false)}>
          <LogoIcon ref={logoRef} />
        </Link>
        <ul ref={linksRef} className="flex flex-col p-6 gap-4 justify-center absolute bg-secondary top-0 right-0 h-screen w-[1px]">
          {links}
        </ul>
        <Hamburger setIsActive={setIsActive} isActive={isActive} />
      </nav>
    </header>
  )
}
