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
    <section className="p-4 space-y-6">
      <div className="space-y-6">
        <h3 className="text-center">
          <span className="section-heading">{TITLE}</span>
        </h3>
        <p className="text-center font-medium">{SUBTITLE}</p>
      </div>
      <div className="space-y-6">
        {accordion}
      </div>
    </section>
  )
}
