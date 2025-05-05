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
    <div className={cn("p-8 w-full h-full max-w-[95%] rounded-[45px] space-y-6 basis-full border-black border-1 service-card-shadow md:h-[310px]", className)} {...props} ref={ref}>
      <Link to={link} className="grid w-full h-full grid-cols-2 gap-6">
        <CardLabel labelLower={labelLower} labelUpper={labelUpper} bg={customStyles.roundedLabels.bg} />

        <div className="w-full relative flex items-end gap-4">
          <LinkArrowIcon className="shrink-0 size-8 md:size-10" arrowBG={customStyles.linkIcon.arrowBg} circleBG={customStyles.linkIcon.circleBg} />
          <span className={cn("sr-only inline-block font-normal text-lg md:not-sr-only md:text-xl  md:whitespace-nowrap", customStyles.linkTextColor)}>Learn More</span>
        </div>

        <div className="w-full place-self-center md:col-start-2 md:row-start-1 md:row-span-2">
          <Icon className="w-24 m-auto md:30 lg:w-40 2xl:w-48" />
        </div>

      </Link>
    </div>

  )
}
