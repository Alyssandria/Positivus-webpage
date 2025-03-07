import { cn } from "../../lib/utils"

interface HamburgerProps extends React.HTMLAttributes<HTMLDivElement> {
  lineHeight?: string | undefined,
}
const HamburgerLine = ({ className, lineHeight, ...props }: HamburgerProps) => {
  return <div className={cn("w-full h-[3px] bg-black", lineHeight, className)} {...props} />
}

export const Hamburger = ({ className, ...props }: HamburgerProps) => {
  return (
    <div className={cn("w-6 h-4 flex flex-col justify-between", className)} {...props}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </div>
  )
}
