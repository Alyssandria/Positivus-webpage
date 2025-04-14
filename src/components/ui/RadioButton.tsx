import { cn } from "@/lib/utils"
import { InputHTMLAttributes } from "react"

export const RadioButton = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input type="radio" className={cn("custom-radio size-5 bg-white", className)}  {...props} />
  )
}
