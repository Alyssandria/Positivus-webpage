import { ComponentPropsWithRef, ComponentType, SVGProps } from "react"
import { LinkArrowIcon } from "@/components/icons/LinkArrowIcon.tsx"
import { CardLabel } from "./CardLabel.tsx"
import { cn } from "@/lib/utils.ts"
import { Link } from "@/components/ui/Link.tsx"
import { serviceCardCustomStyles } from "./utils/sectionUtils.ts"

interface ServiceCardProps extends ComponentPropsWithRef<"div"> {
  labels: string[],
  link: string,
  customStyles: serviceCardCustomStyles,
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}
export const ServiceCard = ({ labels: title, ref, link, Icon, className, customStyles, ...props }: ServiceCardProps) => {
  const [labelUpper, labelLower] = title

  return (
    <Link to={link} className="inline-block w-full">
      <div className={cn("p-8 rounded-[45px] space-y-6 border-black border-1 service-card-shadow", className)} {...props} ref={ref}>
        <CardLabel labelLower={labelLower} labelUpper={labelUpper} bg={customStyles.roundedLabels.bg} />
        <div className="w-full flex">
          <div className="w-full relative flex">
            <LinkArrowIcon className="size-8 absolute bottom-0 left-0" arrowBG={customStyles?.linkIcon?.arrowBg} circleBG={customStyles?.linkIcon?.circleBg} />
            <span className="sr-only absolute bottom-0 left-10 h-fit text-black font-normal text-lg min-[450px]:not-sr-only min-[450px]:absolute">Learn More</span>
          </div>
          <div className="w-full">
            <Icon className="w-30 m-auto" />
          </div>
        </div>
      </div>

    </Link>
  )
}
