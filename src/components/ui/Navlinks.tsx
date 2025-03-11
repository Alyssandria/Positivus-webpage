import { Link } from "../ui/Link"
import content from "../../lib/content/en_us.json"
import { HTMLAttributes, useMemo, useState } from "react"
import { cn } from "../../lib/utils";
import { Hamburger } from "./Hamburger";
import { useNavLinksAnimation } from "../../animations/navlinks.animate";

type NavLinksJSON = {
  CONTENT: string;
  PATH: string;
}

export const NavLinks = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // MEMOIZE navlinksArr
  const linksArr: NavLinksJSON[] = useMemo(() => {
    return Object.entries(content.public.header.nav).filter(el => el[0] !== "LOGO").map(el => el[1]);
  }, [])

  const links = linksArr.map(el => {
    return (
      el.CONTENT === content.public.header.nav.REQUEST.CONTENT
        ?
        <Link href={el.PATH} tabIndex={isActive ? 0 : -1} key={el.PATH}>
          {el.CONTENT}
        </Link >
        :
        <Link tabIndex={isActive ? 0 : -1} href={el.PATH} key={el.PATH}>
          {el.CONTENT}
        </Link>
    )
  })


  // TODO: ANIMATE NAVLINKS
  const { linksRef } = useNavLinksAnimation(isActive)

  return (
    <>
      <ul ref={linksRef} className={cn("flex flex-col p-6 gap-4 justify-center absolute bg-secondary top-0 right-0 h-full w-[1px]", className)} {...props}>
        {links}
      </ul>
      <Hamburger setIsActive={setIsActive} isActive={isActive} />
    </>
  )
}
