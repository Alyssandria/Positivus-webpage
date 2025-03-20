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
    <div>
      <button ref={accordionButtonRef} className="text-left w-full inline-block bg-tertiary p-8 border service-card-shadow border-t-tertiary rounded-4xl" {...props} onClick={() => setIsActive((prev) => !prev)} >
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-4 items-center">
            {index === undefined || <span className="text-2xl font-bold inline-block w-max">{String(index + 1).padStart(2, "0")}</span>}
            <span className="font-medium text-base w-full">{data.TITLE}</span>
          </div>
          <CirclePlus ref={plusIconRef} className="min-w-8" />
          <CircleMinus ref={minusIconRef} className="min-w-8 hidden" />
        </div>

        <div className="invisible max-h-0 overflow-hidden" ref={contentRef}>
          <p>{data.CONTENT}</p>
        </div>
      </button>
    </div>
  )
}
