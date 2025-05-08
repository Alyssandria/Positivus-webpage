import { useAccordionAnimation } from "@/animations/accordion.animate"
import { CircleMinus, CirclePlus } from "lucide-react"
import { HTMLAttributes } from "react"

interface AccordionProps extends HTMLAttributes<HTMLButtonElement> {
  data: {
    TITLE: string
    CONTENT: string
  }
  index?: number
}
export const Accordion = ({ className, index = undefined, data, ...props }: AccordionProps) => {
  const { accordionItemRef: accordionButtonRef, setIsActive, plusIconRef, contentRef, minusIconRef } = useAccordionAnimation();

  return (
    <button ref={accordionButtonRef} className="text-left w-full inline-block bg-tertiary p-8 border service-card-shadow max-sm:border-t-tertiary rounded-4xl hover:cursor-pointer" {...props} onClick={() => setIsActive((prev) => !prev)} >
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-4 items-center sm:gap-6 lg:gap-10">
          {index === undefined || <span className="text-2xl font-bold inline-block w-max sm:text-4xl lg:text-6xl">{String(index + 1).padStart(2, "0")}</span>}
          <span className="font-medium text-base w-full sm:text-lg">{data.TITLE}</span>
        </div>
        <div >
          <CirclePlus ref={plusIconRef} className="stroke-1 size-6 fill-tertiary sm:size-8 lg:size-10" />
          <CircleMinus ref={minusIconRef} className="stroke-1 size-6 hidden fill-tertiary sm:size-8 lg:size-10" />
        </div>
      </div>
      <div className="w-full relative">
        <p ref={contentRef} className="w-full">
          <span className="inline-block pt-6">
            {data.CONTENT}
          </span>
        </p>
      </div>

    </button>
  )
}
