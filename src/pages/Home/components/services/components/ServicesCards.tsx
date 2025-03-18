import { ComponentType, HTMLAttributes, SVGProps } from "react"
import { LinkArrowIcon } from "@/components/icons/LinkArrowIcon.tsx"
import { CardLabel } from "./CardLabel.tsx"
import { cn } from "@/lib/utils.ts"
import { Link } from "@/components/ui/Link.tsx"

interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  labels: string[],
  link: string,
  customStyle?: undefined
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}
export const ServiceCard = ({ labels: title, link, Icon, className, ...props }: ServiceCardProps) => {
  console.log(title);
  const [labelUpper, labelLower] = title

  return (
    <div className={cn("p-8 rounded-[45px] space-y-6 border-black border-1", className)} {...props}>
      <CardLabel labelLower={labelLower} labelUpper={labelUpper} />
      <div className="w-full flex">
        <div className="w-1/2 relative">
          <Link to={link}>
            <LinkArrowIcon className="size-8 absolute bottom-0 left-0" />
          </Link>
          <span className="hidden">Learn More</span>
        </div>
        <div className="flex-auto">
          <Icon className="w-30 m-auto" />
        </div>
      </div>
    </div>
  )
}
