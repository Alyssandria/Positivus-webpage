import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface ClientTestimonyProps extends HTMLAttributes<HTMLDivElement> {
  data: {
    NAME: string,
    POSITION: string,
    MESSAGE: string
  }
}
export const ClientTestimony = ({ className, data, ...props }: ClientTestimonyProps) => {
  return (
    <div className={cn("space-y-10 w-full shrink-0", className)} {...props}>
      <div className="bubble relative bg-secondary border rounded-[45px] text-white p-8 border-primary">
        <blockquote>
          <p className={""}>{data.MESSAGE}</p>
        </blockquote>
      </div>

      <div className="w-max m-auto">
        <span className="block text-left w-max font-medium text-primary">{data.NAME}</span>
        <span className="block text-left w-max text-sm text-white">{data.POSITION}</span>
      </div>
    </div>
  )
}
