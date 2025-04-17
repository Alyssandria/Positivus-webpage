import { LogoIcon } from "./icons/Logo"
import CONTENT from "@/lib/content/en_us.json"
import { Link } from "./ui/Link";
import { Input } from "./ui/Input";

export const Footer = () => {
  const NAVLINKS = CONTENT.PUBLIC.NAVIGATION.filter(el => el.ON_FOOTER).map(el => {
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

  const CONTACTS = CONTENT.PUBLIC.FOOTER.CONTACTS_SECTION.CONTACTS.map(el => {
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

  return (
    <footer className={"mt-8 flex flex-col bg-secondary p-4 gap-4"}>
      <nav>
        <ul className="mt-6 flex flex-col gap-2">
          {NAVLINKS}
        </ul>
      </nav>

      <section className="text-center text-xs flex flex-col gap-6 text-white">
        <h2 className="text-black font-medium bg-primary w-fit p-1 rounded-md m-auto">{CONTENT.PUBLIC.FOOTER.CONTACTS_SECTION.TITLE}</h2>
        <ul className="space-y-3">
          {CONTACTS}
        </ul>
      </section>

      <form className="w-full bg-[#292A32] p-8 rounded-lg space-y-4" >
        <fieldset>
          <Input className="bg-transparent border-white w-full py-3" placeholder={CONTENT.PUBLIC.FOOTER.CONTACTS_SECTION.FORM_CONTENT.NEWSLETTER.INPUTFIELDS.PLACEHOLDER} />
        </fieldset>
        <button type="submit" className="w-full bg-primary rounded-lg font-medium text-sm text-black p-4">{CONTENT.PUBLIC.FOOTER.CONTACTS_SECTION.FORM_CONTENT.NEWSLETTER.SUBMIT}</button>
      </form>

      {/* TODO: FINISH FOOTER */}


    </footer>
  )
}
