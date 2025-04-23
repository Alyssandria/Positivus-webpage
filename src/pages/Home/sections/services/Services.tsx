import { ServiceCard } from "./components/ServicesCards"
import CONTENT from "@/lib/content/en_us.json"
import { ServiceSeoIcon } from "@/components/icons/ServiceSeoIcon"
import { Proposal } from "./components/Proposal"
import { Section } from "@/components/Section"
import { useMemo } from "react"
import { bgVariants } from "./components/utils/sectionUtils"
import { CONSTANTS } from "@/lib/constants"

// LOCAL CONSTANTS
const LOCAL_CONSTANTS = {
  SERVICE_TITLE: CONTENT.PUBLIC.MAIN.HOME.SERVICES.TITLE.CONTENT,
  SERVICE_SUBTITLE: CONTENT.PUBLIC.MAIN.HOME.SERVICES.SUB_TITLE.CONTENT,
  SERVICE_CARDS: CONTENT.PUBLIC.MAIN.HOME.SERVICES.CARDS
}

const bgClassVariants = {
  white: "bg-tertiary",
  green: "bg-primary",
  black: "bg-secondary",
}

const fillClassVariants = {
  white: "fill-tertiary",
  green: "fill-primary",
  black: "fill-secondary",
}

// LOCAL UTILITIES 
const getCustomStyles = (i: number) => {

  // RESET THE INDEX EVERY 3rd COUNT
  const index = i % 3;
  const bgVariantArr: bgVariants[] = ["white", "green", "black"]

  return {
    background: bgClassVariants[bgVariantArr[index]],
    roundedLabelsBg: bgClassVariants[index === 0 ? bgVariantArr[1] : bgVariantArr[0]],
    linkBg: {
      arrow: fillClassVariants[index === bgVariantArr.length - 1 ? bgVariantArr[2] : bgVariantArr[1]],
      circle: fillClassVariants[index === bgVariantArr.length - 1 ? bgVariantArr[0] : bgVariantArr[2]]
    }
  }

}


export const Services = () => {

  // CARD CONTENTS
  const ServiceCards = useMemo(() => {
    return LOCAL_CONSTANTS.SERVICE_CARDS.map((el, i) => {
      const styles = getCustomStyles(i);
      const icon = CONSTANTS.ICONS.SERVICES.find(icon => el.ICON_ID === icon.ID)

      if (!icon) return;

      return (
        <ServiceCard
          key={el.ICON_ID}
          link={el.CTA.CONTENT}
          labels={el.LABEL}
          Icon={icon.ICON}
          className={styles.background}
          customStyles={
            {
              roundedLabels: {
                bg: styles.roundedLabelsBg
              },
              linkIcon: {
                arrowBg: styles.linkBg.arrow,
                circleBg: styles.linkBg.circle
              }

            }
          }
        />
      )
    })
  }, [LOCAL_CONSTANTS.SERVICE_CARDS])

  return (
    <Section subTitle={LOCAL_CONSTANTS.SERVICE_SUBTITLE} title={LOCAL_CONSTANTS.SERVICE_TITLE}>
      <div className="cards flex flex-wrap justify-center space-y-4">
        {ServiceCards}
      </div>

      <div>
        <Proposal />
      </div>
    </Section>
  )
}
