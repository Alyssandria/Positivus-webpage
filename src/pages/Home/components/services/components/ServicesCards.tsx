import { ComponentType, HTMLAttributes, SVGProps } from "react"
import { LinkArrowIcon } from "@/components/icons/LinkArrowIcon.tsx"
import { CardLabel } from "./CardLabel.tsx"
import { cn } from "@/lib/utils.ts"
import { Link } from "@/components/ui/Link.tsx"

export interface serviceCardCustomStyles {
  roundedLabels?: {
    bg?: string
  },
  linkIcon?: {
    arrowBg?: string
    circleBg?: string
  }
}

interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  labels: string[],
  link: string,
  customStyles?: serviceCardCustomStyles,
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}
export const ServiceCard = ({ labels: title, link, Icon, className, customStyles, ...props }: ServiceCardProps) => {
  const [labelUpper, labelLower] = title

  return (
    <Link to={link}>
      <div className={cn("p-8 rounded-[45px] space-y-6 border-black border-1 service-card-shadow", className)} {...props}>
        <CardLabel labelLower={labelLower} labelUpper={labelUpper} bg={customStyles?.roundedLabels?.bg} />
        <div className="w-full flex">
          <div className="w-1/2 relative">
            <LinkArrowIcon className="size-8 absolute bottom-0 left-0" arrowBG={customStyles?.linkIcon?.arrowBg} circleBG={customStyles?.linkIcon?.circleBg} />
            <span className="hidden">Learn More</span>
          </div>
          <div className="flex-auto">
            <Icon className="w-30 m-auto" />
          </div>
        </div>
      </div>

    </Link>
  )
}
