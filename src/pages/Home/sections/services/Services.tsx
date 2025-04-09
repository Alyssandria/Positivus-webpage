import { ServiceCard } from "./components/ServicesCards"
import CONTENT from "@/lib/content/en_us.json"
import { ServiceSeoIcon } from "@/components/icons/ServiceSeoIcon"
import { ServicePpcIcon } from "@/components/icons/ServicePpcIcon"
import { ServiceSocmedIcon } from "@/components/icons/ServiceSocmedIcon"
import { ServiceEmailIcon } from "@/components/icons/ServiceEmailIcon"
import { ServiceContentIcon } from "@/components/icons/ServiceContentIcon"
import { ServiceAnalyticsIcon } from "@/components/icons/ServiceAnalyticsIcon"
import { Proposal } from "./components/Proposal"
import { Section } from "@/components/Section"
export const Services = () => {
  const sectionTitle = CONTENT.PUBLIC.MAIN.HOME.SERVICES.TITLE.CONTENT
  const sectionSubTitle = CONTENT.PUBLIC.MAIN.HOME.SERVICES.SUB_TITLE.CONTENT

  // CARD CONTENTS

  // SEO
  const seoLink = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.SEO.CTA.ACTION
  const seoLabels = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.SEO.TITLE.LABEL

  // PPC ADVERT
  const ppcLink = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.PPC_ADVERT.CTA.ACTION
  const ppcLabels = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.PPC_ADVERT.TITLE.LABEL

  // SOCMED MARKETING
  const socmedLink = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.SOCMED.CTA.ACTION
  const socmedLabels = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.SOCMED.TITLE.LABEL

  // EMAIL MARKETING
  const emailLink = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.EMAIL.CTA.ACTION
  const emailLabels = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.EMAIL.TITLE.LABEL

  // CONTENT CREATION
  const contentLink = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.CONTENT_CREATE.CTA.ACTION
  const contentLabels = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.CONTENT_CREATE.TITLE.LABEL

  // ANALYSIS AND TRACKING
  const analysisLink = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.ANALYTICS.CTA.ACTION
  const analysisLabels = CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS.ANALYTICS.TITLE.LABEL

  return (
    <Section subTitle={sectionSubTitle} title={sectionTitle}>
      <div className="cards space-y-4">
        <ServiceCard
          link={seoLink}
          labels={seoLabels}
          Icon={ServiceSeoIcon}
          className="bg-tertiary"
        />

        <ServiceCard
          link={ppcLink}
          labels={ppcLabels}
          Icon={ServicePpcIcon}
          className="bg-primary"
          customStyles={{
            roundedLabels: {
              bg: "bg-tertiary"
            }
          }}
        />

        <ServiceCard
          link={socmedLink}
          labels={socmedLabels}
          Icon={ServiceSocmedIcon}
          className="bg-secondary"
          customStyles={{
            linkIcon: {
              circleBg: "fill-tertiary",
              arrowBg: "fill-secondary"
            },
            roundedLabels: {
              bg: "bg-tertiary"
            }
          }}
        />
        <ServiceCard
          link={emailLink}
          labels={emailLabels}
          Icon={ServiceEmailIcon}
          className="bg-tertiary"
        />

        <ServiceCard
          link={contentLink}
          labels={contentLabels}
          Icon={ServiceContentIcon}
          className="bg-primary"
          customStyles={{
            roundedLabels: {
              bg: "bg-tertiary"
            }
          }}
        />

        <ServiceCard
          link={analysisLink}
          labels={analysisLabels}
          Icon={ServiceAnalyticsIcon}
          className="bg-secondary"
          customStyles={{
            linkIcon: {
              circleBg: "fill-tertiary",
              arrowBg: "fill-secondary"
            },
            roundedLabels: {
              bg: "bg-tertiary"
            }
          }}
        />
      </div>

      <div>
        <Proposal />
      </div>
    </Section>
  )
}
