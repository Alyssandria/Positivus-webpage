import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface ClientTestimonyProps extends HTMLAttributes<HTMLDivElement> {
  data: {
    NAME: string,
    POSITION: string,
    MESSAGE: string
  };
  ref?: React.Ref<HTMLDivElement>;
}
export const ClientTestimony = ({ ref, className, data, ...props }: ClientTestimonyProps) => {
  return (
    <div ref={ref} className={cn("space-y-10 w-full shrink-0 snap-center", className)} {...props}>
      <div className="bubble relative bg-secondary border rounded-[45px] text-white p-8 border-primary">
        <blockquote>
          <p className={""}>{data.MESSAGE}</p>
        </blockquote>
      </div>

      <div className=" w-3/5 m-auto">
        <span className="block text-left  font-medium text-primary">{data.NAME}</span>
        <span className="block text-left  text-sm text-white">{data.POSITION}</span>
      </div>
    </div>
  )
}
