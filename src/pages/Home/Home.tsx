import { useBrandsAnimation } from "../../animations/brands.animate"
import { ServiceSeoIcon } from "../../components/icons/ServiceSeoIcon"
import { AmazonLogo } from "../../components/icons/AmazonLogo"
import { DribbleLogo } from "../../components/icons/DribbleLogo"
import { HeroIllustration } from "../../components/icons/HeroIllustration"
import { HubSpotLogo } from "../../components/icons/HubSpotLogo"
import { NetflixLogo } from "../../components/icons/NetflixLogo"
import { NotionLogo } from "../../components/icons/NotionLogo"
import { ZoomLogo } from "../../components/icons/ZoomLogo"
import { ServiceCard } from "../../components/pages/home/ServicesCards"
import { Link } from "../../components/ui/Link"
import CONTENT from "../../lib/content/en_us.json"

export const Home = () => {
  const { brandsRowUpper, brandsRowLower } = useBrandsAnimation();
  return (
    <>
      <section className="w-full">
        <div className="p-4 space-y-6">
          <h1 className="text-4xl font-medium">{CONTENT.PUBLIC.MAIN.HOME.HERO.TITLE.CONTENT}</h1>
          <HeroIllustration className="w-full" />
          <p className="text-sm">{CONTENT.PUBLIC.MAIN.HOME.HERO.SUB_TITLE.CONTENT}</p>
          <Link to={CONTENT.PUBLIC.MAIN.HOME.HERO.CTA.ACTION} linkStyle="button_bg" className="inline-block w-full text-center text-base">{CONTENT.PUBLIC.MAIN.HOME.HERO.CTA.CONTENT}</Link>
        </div>
        <div>
          <div ref={brandsRowUpper} className="flex justify-around w-full items-center top-0" >
            <AmazonLogo />
            <DribbleLogo />
            <HubSpotLogo />
          </div>
          <div ref={brandsRowLower} className="flex gap-4 w-full items-center bottom-0">
            <NetflixLogo />
            <NotionLogo />
            <ZoomLogo />
          </div>
        </div>
      </section>
      {/* TODO: FINISH SERVICES SECTION */}
      <section className="p-4">
        <h2>{CONTENT.PUBLIC.MAIN.HOME.SERVICES.TITLE.CONTENT}</h2>
        <p>{CONTENT.PUBLIC.MAIN.HOME.SERVICES.SUB_TITLE.CONTENT}</p>
        <div className="cards">
          <ServiceCard link={CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.SEO.CTA.ACTION} labels={CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.SEO.TITLE.LABEL} Icon={ServiceSeoIcon} />
        </div>
      </section>
    </>
  )
}
