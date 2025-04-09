import CONTENT from "@/lib/content/en_us.json"
import { CaseStudyCards } from "./components/CaseStudyCards"
import { Section } from "@/components/Section"

export const CaseStudy = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.CASESTUDIES.TITLE.CONTENT
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.CASESTUDIES.SUB_TITLE.CONTENT
  return (
    <Section subTitle={SUBTITLE} title={TITLE}>
      <CaseStudyCards />
    </Section>
  )
}
