import { LogoIcon } from "./icons/Logo"
import { Hamburger } from "./ui/Hamburger"
import content from "../lib/content/en_us.json"
import { Link } from "./ui/Link"


export const Header = () => {
  return (
    <header className="h-[8svh]">
      <nav className="w-full h-full flex justify-between items-center">
        <Link href={content.public.header.nav.LOGO.PATH} className="w-32 inline-flex flex-row items-center justify-center">
          <LogoIcon />
        </Link>

        <ul className="hidden">
          <li>
            <Link href={content.public.header.nav.ABOUT.PATH}>{content.public.header.nav.ABOUT.CONTENT}</Link>
          </li>

          <li>
            <Link href={content.public.header.nav.SERVICES.CONTENT}>{content.public.header.nav.SERVICES.CONTENT}</Link>
          </li>

          <li>
            <Link href={content.public.header.nav.USECASE.CONTENT}>{content.public.header.nav.USECASE.CONTENT}</Link>
          </li>

          <li>
            <Link href={content.public.header.nav.PRICING.PATH}>{content.public.header.nav.PRICING.CONTENT}</Link>
          </li>

          <li>
            <Link href={content.public.header.nav.BLOG.PATH}>{content.public.header.nav.BLOG.CONTENT}</Link>
          </li>

          <li>
            <Link href={content.public.header.nav.REQUEST.PATH} linkStyle="button">{content.public.header.nav.REQUEST.CONTENT}</Link>
          </li>
        </ul>

        <Hamburger />
      </nav>
    </header>
  )
}
