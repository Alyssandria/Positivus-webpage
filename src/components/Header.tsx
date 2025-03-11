import { LogoIcon } from "./icons/Logo"
import { Link } from "./ui/Link"
import content from "../lib/content/en_us.json"
import { NavLinks } from "./ui/Navlinks"

export const Header = () => {
  return (
    <header className="h-[8svh]">
      <nav className="w-full h-full flex justify-between items-center">
        <Link to={content.PUBLIC.HEADER.NAV.LOGO.PATH} className="w-32 inline-flex flex-row items-center justify-center">
          <LogoIcon />
        </Link>
        <NavLinks />
      </nav>
    </header>
  )
}
