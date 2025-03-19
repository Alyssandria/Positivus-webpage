import { Link } from "@/components/ui/Link";
import CONTENT from "@/lib/content/en_us.json"
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
export const Proposal = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.SERVICES.PROPOSAL.TITLE.CONTENT;
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.SERVICES.PROPOSAL.SUB_TITLE.CONTENT;

  const CTA_TITLE = CONTENT.PUBLIC.MAIN.HOME.SERVICES.PROPOSAL.CTA.CONTENT;
  const CTA_LINK = CONTENT.PUBLIC.MAIN.HOME.SERVICES.PROPOSAL.CTA.ACTION;

  return (
    <div className={cn("flex bg-tertiary px-10 py-12 rounded-[46px]", className)} {...props}>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">{TITLE}</h3>
        <p>{SUBTITLE}</p>
        <Link to={CTA_LINK} linkStyle="button_bg" className="text-base w-full font-medium inline-block">{CTA_TITLE}</Link>
      </div>
      <div></div>
    </div>
  )
}
