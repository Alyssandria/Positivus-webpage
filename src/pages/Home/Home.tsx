import { AmazonLogo } from "../../components/icons/AmazonLogo"
import { DribbleLogo } from "../../components/icons/DribbleLogo"
import { HeroIllustration } from "../../components/icons/HeroIllustration"
import { HubSpotLogo } from "../../components/icons/HubSpotLogo"
import { NetflixLogo } from "../../components/icons/NetflixLogo"
import { NotionLogo } from "../../components/icons/NotionLogo"
import { ZoomLogo } from "../../components/icons/ZoomLogo"
import { Link } from "../../components/ui/Link"
import content from "../../lib/content/en_us.json"

// TODO: FINISH LANDING PAGE
export const Home = () => {
  return (
    <section className="mt-4 w-full space-y-6">
      <h1 className="text-4xl font-medium">{content.PUBLIC.HERO.TITLE.CONTENT}</h1>
      <HeroIllustration className="w-full" />
      <p className="text-sm">{content.PUBLIC.HERO.SUB_TITLE.CONTENT}</p>
      <Link to={content.PUBLIC.HERO.CTA.ACTION} linkStyle="button_bg" className="inline-block w-full text-center text-base">{content.PUBLIC.HERO.CTA.CONTENT}</Link>

      <div>
        <div>
          <AmazonLogo />
          <DribbleLogo />
          <HubSpotLogo />
        </div>
        <div>
          <NetflixLogo />
          <NotionLogo />
          <ZoomLogo />
        </div>
      </div>
    </section>
  )
}
