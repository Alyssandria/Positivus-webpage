import { ReactNode, SVGProps } from "react"
import { cn } from "@/lib/utils"

interface BrandIconProps extends SVGProps<SVGSVGElement> {
  viewBoxWidth: string,
  viewBoxHeight: string
  children: ReactNode
}
export const BrandIcon = ({ children, viewBoxWidth, viewBoxHeight, className, ...props }: BrandIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={111}
      height={48}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className={cn("w-20 sm:grayscale-100 sm:hover:grayscale-0 lg:w-40", className)}
      {...props}
    >
      {children}
    </svg>
  )
}
