import { LinkArrowIcon } from "@/components/icons/LinkArrowIcon";
import { Link } from "@/components/ui/Link";
import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react";
interface CaseStudyCardsProps extends ComponentPropsWithRef<"li"> {
  data: {
    CTA: {
      PATH: string,
      CONTENT: string
    }
    CONTENT: string
  }
}

export const CaseStudyCards = ({ className, data, ...props }: CaseStudyCardsProps) => {
  return (
    <li className={cn("w-[95%] max-lg:shrink-0 snap-center bg-secondary rounded-[45px] p-8 sm:gap-10 sm:p-12 lg:rounded-none lg:p-0 lg:hover:cursor-pointer not-last:lg:border-r not-last:pr-10 not-last:lg:border-r-white", className)} {...props}>
      <Link to={data.CTA.PATH} className="w-full h-full flex justify-between flex-col gap-4">
        <div>
          <p className="text-white text-sm font-normal sm:text-lg lg:hover:text-gray-300">{data.CONTENT}</p>
        </div>
        <div className="font-medium text-base text-primary inline-flex items-end gap-2 sm:text-lg">
          <span>
            {data.CTA.CONTENT}
          </span>
          <LinkArrowIcon className="size-8 sm:size-10" />
        </div>
      </Link>
    </li>
  )
}
