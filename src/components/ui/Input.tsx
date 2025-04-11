import { cn } from "@/lib/utils"
import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react"
import { useFormStatus } from "react-dom"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

export const Input = ({ className, ...props }: InputProps) => {
  const { pending } = useFormStatus()
  return <input className={cn("rounded-lg p-2 px-4 border bg-white placeholder:text-xs placeholder:text-[#898989] focus:outline-primary", className)} disabled={pending}  {...props} />
}
