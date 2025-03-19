import CONTENT from "@/lib/content/en_us.json"
import { CaseStudyCards } from "./components/CaseStudyCards"

export const CaseStudy = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.CASESTUDIES.TITLE.CONTENT
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.CASESTUDIES.SUB_TITLE.CONTENT
  return (
    <section className="p-4">
      <div className="space-y-6">
        <h2 className="text-center"><span className="section-heading">{TITLE}</span></h2>
        <p className="text-center font-medium">{SUBTITLE}</p>
      </div>
      <CaseStudyCards />
    </section>
  )
}
