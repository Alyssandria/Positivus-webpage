import CONTENT from "@/lib/content/en_us.json"
import { TeamCard } from "./components/TeamCards"
import { Link } from "@/components/ui/Link"
import { Section } from "@/components/Section";

export const Teams = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.TEAM.TITLE;
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.TEAM.SUB_TITLE;
  const TEAM_CTA = CONTENT.PUBLIC.MAIN.HOME.TEAM.CTA;
  const teamCards = CONTENT.PUBLIC.MAIN.HOME.TEAM.CARDS.map((data) => {
    return <TeamCard data={data} key={data.NAME} />
  });

  return (
    <Section title={TITLE} subTitle={SUBTITLE} >
      <div className="flex flex-col gap-6">
        {teamCards}
      </div>

      <Link to={TEAM_CTA.ACTION} linkStyle="button_bg" className="text-center font-normal text-base inline-block w-full bg-black">{TEAM_CTA.CONTENT}</Link>
    </Section>
  )
}
