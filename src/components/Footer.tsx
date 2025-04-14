import { cn } from "@/lib/utils"
import { LogoIcon } from "./icons/Logo"

export const Footer = () => {
  return (
    <footer className={cn("mt-8 bg-secondary p-4")}>
      <div className="mt-6 flex flex-col gap-4">
        <LogoIcon className="h-7 w-full text-white" />



      </div>

    </footer>
  )
}
