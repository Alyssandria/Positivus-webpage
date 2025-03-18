import { Link } from "@/components/ui/Link";
import CONTENT from "@/lib/content/en_us.json"
export const Proposal = ({ ...props }) => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.SERVICES.PROPOSAL.TITLE.CONTENT;
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.SERVICES.PROPOSAL.SUB_TITLE.CONTENT;

  const CTA_TITLE = CONTENT.PUBLIC.MAIN.HOME.SERVICES.PROPOSAL.CTA.CONTENT;
  const CTA_LINK = CONTENT.PUBLIC.MAIN.HOME.SERVICES.PROPOSAL.CTA.ACTION;

  // TODO: FINISH PROPOSAL
  return (
    <div>
      <div>
        <h3>{TITLE}</h3>
        <p>{SUBTITLE}</p>
        <Link to={CTA_LINK}>{CTA_TITLE}</Link>
      </div>
      <div></div>
    </div>
  )
}
