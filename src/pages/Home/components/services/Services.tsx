import { ServiceCard } from "./components/ServicesCards"
import CONTENT from "@/lib/content/en_us.json"
import { ServiceSeoIcon } from "@/components/icons/ServiceSeoIcon"
export const Services = () => {
  return (
    <section className="p-4">
      <h2>{CONTENT.PUBLIC.MAIN.HOME.SERVICES.TITLE.CONTENT}</h2>
      <p>{CONTENT.PUBLIC.MAIN.HOME.SERVICES.SUB_TITLE.CONTENT}</p>
      <div className="cards">
        <ServiceCard link={CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.SEO.CTA.ACTION} labels={CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.SEO.TITLE.LABEL} Icon={ServiceSeoIcon} />
      </div>
    </section>
  )
}
