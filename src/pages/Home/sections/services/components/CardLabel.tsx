import { cn } from "@/lib/utils"

interface CardLabelProps {
  labelUpper: string
  labelLower: string
  bg: string
}

interface RoundedLabelProps {
  bg: string,
  label: string
}

const RoundedLabel = ({ bg, label }: RoundedLabelProps) => {

  return <span className={cn("p-[4px] rounded-[7px] inline-block w-max", bg)}>{label}</span>
}

export const CardLabel = ({ labelLower, labelUpper, bg }: CardLabelProps) => {
  return (
    <h3 className="max-md:col-span-full px-[4px] py-[2px] inline-flex flex-col font-medium text-xl text-black xl:text-3xl">
      <RoundedLabel label={labelUpper} bg={bg} />
      <RoundedLabel label={labelLower} bg={bg} />
    </h3>
  )
}
