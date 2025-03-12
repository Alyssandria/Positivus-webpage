import { HeroIllustration } from "../../components/icons/HeroIllustration"
import { Link } from "../../components/ui/Link"
import content from "../../lib/content/en_us.json"
export const Home = () => {
  return (
    <section className="mt-4 w-full space-y-6">
      <h1 className="text-4xl font-medium">{content.PUBLIC.HERO.TITLE.CONTENT}</h1>
      <HeroIllustration className="w-full" />
      <p className="text-sm">{content.PUBLIC.HERO.SUB_TITLE.CONTENT}</p>
      <Link to={content.PUBLIC.HERO.CTA.ACTION} linkStyle="button_bg" className="inline-block w-full text-center text-base">{content.PUBLIC.HERO.CTA.CONTENT}</Link>
    </section>
  )
}
