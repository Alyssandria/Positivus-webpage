import { cn } from "@/lib/utils"
import { SVGProps } from "react"

interface CarouselIconProps extends SVGProps<SVGSVGElement> {
  isActive: boolean
}
export const CarouselIcon = ({ isActive, className, ...props }: CarouselIconProps) => {
  return (
    <svg
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(isActive ? "text-primary" : "text-white", className)}
      {...props}
    >
      <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="currentColor" />
    </svg >
  )
}

