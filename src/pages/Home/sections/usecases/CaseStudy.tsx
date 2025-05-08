import CONTENT from "@/lib/content/en_us.json"
import { CaseStudyCards } from "./components/CaseStudyCards"
import { Section } from "@/components/Section"

export const CaseStudy = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.CASESTUDIES.TITLE.CONTENT
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.CASESTUDIES.SUB_TITLE.CONTENT
  const CARDS = CONTENT.PUBLIC.MAIN.HOME.CASESTUDIES.CASES.map(el => {
    return (
      <CaseStudyCards data={el} key={el.CTA.PATH} />
    )
  });
  return (
    <Section subTitle={SUBTITLE} title={TITLE}>
      <ul className="flex w-full gap-2 p-4 cards-swipe rounded-[45px] max-lg:overflow-x-scroll lg:bg-secondary lg:p-12 lg:gap-8">
        {CARDS}
      </ul>
    </Section>
  )
}
