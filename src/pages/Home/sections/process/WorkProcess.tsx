import { Section } from "@/components/Section"
import { Accordion } from "@/components/ui/Accordion"
import CONTENT from "@/lib/content/en_us.json"
export const WorkProcess = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.WORKPROCESS.TITLE
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.WORKPROCESS.SUB_TITLE
  const PROCESS = CONTENT.PUBLIC.MAIN.HOME.WORKPROCESS.ACCORDION

  const accordion = PROCESS.map((el, i) => {
    return <Accordion data={el} key={el.TITLE} index={i} />
  })

  return (
    <Section subTitle={SUBTITLE} title={TITLE}>
      <div className="space-y-6">
        {accordion}
      </div>
    </Section>
  )
}
