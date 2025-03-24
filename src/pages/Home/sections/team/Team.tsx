import CONTENT from "@/lib/content/en_us.json"
import { TeamCard } from "./components/TeamCards"

export const Teams = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.TEAM.TITLE
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.TEAM.SUB_TITLE
  const teamCards = CONTENT.PUBLIC.MAIN.HOME.TEAM.CARDS.map((data) => {
    return <TeamCard data={data} key={data.NAME} />
  })
  return (
    <section className="p-4 space-y-6">
      <div className="space-y-6">
        <h3 className="text-center">
          <span className="section-heading">{TITLE}</span>
        </h3>
        <p className="text-center font-medium">{SUBTITLE}</p>
      </div>
      {teamCards}
    </section>
  )
}
