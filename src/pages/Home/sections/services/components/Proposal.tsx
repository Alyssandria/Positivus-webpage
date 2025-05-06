import { ProposalIcon } from "@/components/icons/ProposalIcon";
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
    <div className={cn("flex bg-tertiary px-10 py-12 rounded-[46px] relative xl:px-14", className)} {...props}>
      <div className="space-y-4 lg:w-3/5 xl:space-y-8">
        <h3 className="text-xl font-medium md:text-2xl xl:text-3xl">{TITLE}</h3>
        <p className="xl:w-4/5">{SUBTITLE}</p>
        <Link to={CTA_LINK} linkStyle="button_bg" className="text-center text-base w-full font-medium inline-block lg:w-fit xl:text-lg xl:font-normal">{CTA_TITLE}</Link>
      </div>
      <div className="lg:w-full">
        <div className="absolute  size-80 -top-5 right-40 xl:w-[400px] xl:h-[130%] xl:-top-10">
          <ProposalIcon className="max-lg:hidden" />
        </div>
      </div>
    </div>
  )
}
