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
    <div className={cn("p-8 w-full max-w-[95%] rounded-[45px] space-y-6 basis-full border-black border-1 service-card-shadow", className)} {...props} ref={ref}>
      <Link to={link} className="grid w-full grid-cols-2">
        <CardLabel labelLower={labelLower} labelUpper={labelUpper} bg={customStyles.roundedLabels.bg} />

        <div className="w-full relative flex">
          <LinkArrowIcon className="size-8 absolute bottom-0 left-0" arrowBG={customStyles?.linkIcon?.arrowBg} circleBG={customStyles?.linkIcon?.circleBg} />
          <span className="sr-only absolute bottom-0 left-10 h-fit text-black font-normal text-lg">Learn More</span>
        </div>

        <div className="w-full place-self-center xl:col-start-2 xl:row-start-1">
          <Icon className="w-24 m-auto md:w-30 xl:w-50" />
        </div>

      </Link>
    </div>

  )
}
