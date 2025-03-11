import { AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

interface Navlinkprops extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode,
  linkStyle?: "default" | "button_bg" | "button"
}

const linkVariants = cva("cursor-pointer font-bold text-xl", {
  variants: {
    linkStyle: {
      button_bg: "rounded-lg px-8 py-4 text-white bg-secondary",
      default: "text-white",
      button: "border rounded-lg px-8 py-4"
    }
  },
  defaultVariants: {
    linkStyle: "default"
  }
})

export const Link = ({ className, children, linkStyle, ...props }: Navlinkprops) => {
  return (
    <a className={cn(linkVariants({ linkStyle }), className)} {...props}>{children}</a>
  )
}
