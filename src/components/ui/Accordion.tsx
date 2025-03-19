import { CirclePlus } from "lucide-react"
import { HTMLAttributes } from "react"

interface AccordionProps extends HTMLAttributes<HTMLLIElement> {
  data: {
    TITLE: string
    CONTENT: string
  }
  hasNumber?: boolean
  index?: number
}
export const Accordion = ({ className, hasNumber = false, index, data, ...props }: AccordionProps) => {

  return (
    <li>
      <div>
        {hasNumber && <span>{index}</span>}
        <span>{data.TITLE}</span>
        <CirclePlus />
      </div>
    </li>
  )
}
