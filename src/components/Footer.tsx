import { LogoIcon } from "./icons/Logo"
import CONTENT from "@/lib/content/en_us.json"
import { Link } from "./ui/Link";
import { Input } from "./ui/Input";
import { CONSTANTS } from "@/lib/constants";
import { useMemo } from "react";

export const Footer = () => {
  const FOOTER_CONTENT = CONTENT.PUBLIC.FOOTER
  const NAVLINKS = useMemo(() => {
    return CONTENT.PUBLIC.NAVIGATION.filter(el => el.ON_FOOTER).map(el => {
      let link: React.ReactNode;

      if (el.CONTENT === "LOGO") {
        link = <LogoIcon className="h-7" />
      } else {
        link = el.CONTENT
      }
      return (
        <li key={el.CONTENT}>
          <Link to={el.PATH} className="w-full font-normal text-white inline-flex justify-center text-xs" >
            {link}
          </Link>
        </li>

      )
    });


  }, [CONTENT.PUBLIC.NAVIGATION])

  const CONTACTS = useMemo(() => {
    return FOOTER_CONTENT.CONTACTS_SECTION.CONTACTS.map(el => {
      const label = el.LABEL.toLowerCase();
      let content: React.ReactNode;

      if (label === "address") {
        content =
          <span>
            {el.CONTENT.split("\n")[0]}
            <br />
            {el.CONTENT.split("\n")[1]}
          </span>
      } else {
        content = el.CONTENT;
      }

      return (
        <li key={el.LABEL}>
          <span className="text-xs">
            {`${label.charAt(0).toUpperCase() + label.slice(1)}: `}
            {content}
          </span>
        </li>
      )
    });
  }, [FOOTER_CONTENT.CONTACTS_SECTION.CONTACTS])


  const SOCIALS = FOOTER_CONTENT.CONTACTS_SECTION.SOCIALS.map((el) => {
    const ICON = CONSTANTS.ICONS.SOCIALS.find(icon => icon.ID === el.ICON_ID)?.ICON;
    return (
      <li key={el.ICON_ID}>
        {ICON ? <ICON className="w-6" /> : ""}
      </li>
    )
  })


  return (
    <footer className={"mt-8 flex flex-col bg-secondary p-4 gap-6"}>
      <nav>
        <ul className="mt-6 flex flex-col gap-2">
          {NAVLINKS}
        </ul>
      </nav>

      <section className="text-center text-xs flex flex-col gap-6 text-white">
        <h2 className="text-black font-medium bg-primary w-fit p-1 rounded-md m-auto">{FOOTER_CONTENT.CONTACTS_SECTION.TITLE}</h2>
        <ul className="space-y-3">
          {CONTACTS}
        </ul>
        <form className="w-full bg-[#292A32] p-8 rounded-lg space-y-4" >
          <fieldset>
            <Input className="bg-transparent border-white w-full py-3" placeholder={FOOTER_CONTENT.CONTACTS_SECTION.FORM_CONTENT.NEWSLETTER.INPUTFIELDS.PLACEHOLDER} />
          </fieldset>
          <button type="submit" className="w-full bg-primary rounded-lg font-medium text-sm text-black p-4">{FOOTER_CONTENT.CONTACTS_SECTION.FORM_CONTENT.NEWSLETTER.SUBMIT}</button>
        </form>

        <ul className="flex justify-center items-center gap-4 ">
          {SOCIALS}
        </ul>
      </section>

      <section className="border-t border-t-white pt-4 text-center text-white font-light space-y-2">
        <small className="block">{FOOTER_CONTENT.COPYRIGHT_SECTION.COPYRIGHT}</small>
        <a href={FOOTER_CONTENT.COPYRIGHT_SECTION.PRIVACY_POLICY.PATH} className="block text-sm underline">
          {FOOTER_CONTENT.COPYRIGHT_SECTION.PRIVACY_POLICY.CONTENT}
        </a>
      </section>


    </footer>
  )
}
