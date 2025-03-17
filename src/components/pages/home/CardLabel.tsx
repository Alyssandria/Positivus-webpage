import { cn } from "../../../lib/utils"

interface CardLabelProps {
  labelUpper: string
  labelLower: string
  bg?: string
}

interface RoundedLabelProps {
  bg?: string,
  label: string
}

const RoundedLabel = ({ bg, label }: RoundedLabelProps) => {
  return <span className={cn("p-[4px] rounded-[7px] inline-block", !bg ? "bg-primary" : bg)}>{label}</span>
}

export const CardLabel = ({ labelLower, labelUpper, bg }: CardLabelProps) => {
  return (
    <h3 className="p-[4px] font-medium text-xl">
      <RoundedLabel label={labelUpper} bg={bg} />
      <RoundedLabel label={labelLower} bg={bg} />
    </h3>
  )
}
