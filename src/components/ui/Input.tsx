import { cn } from "@/lib/utils"
import { InputHTMLAttributes } from "react"
import { useFormStatus } from "react-dom"

export const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const { pending } = useFormStatus()
  return <input className={cn("rounded-lg p-2 px-4 border bg-white placeholder:text-xs placeholder:text-[#898989] focus:outline-primary", className)} disabled={pending}  {...props} />
}
