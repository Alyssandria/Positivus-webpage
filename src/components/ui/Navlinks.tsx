import { Link } from "../ui/Link"
import content from "../../lib/content/en_us.json"
import { HTMLAttributes, useState } from "react"
import { cn } from "../../lib/utils";
import { Hamburger } from "./Hamburger";



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

  console.log(isActive)

  return (
    <>
      <ul className={cn(isActive ? "" : "hidden", "nav-links", className)} {...props}>
        {links}
      </ul>
      <Hamburger setIsActive={setIsActive} isActive={isActive} />
    </>
  )
}
