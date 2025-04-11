import { cn } from "@/lib/utils"
import { DetailedHTMLProps, LabelHTMLAttributes } from "react"

interface LabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  children: React.ReactNode
}
export const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label className={cn("text-sm", className)} {...props} >{children}</label>
  )
}
