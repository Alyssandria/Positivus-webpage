import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { NavLink } from "react-router";

interface Navlinkprops extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode,
  linkStyle?: "default" | "button_bg" | "button"
  to: string
}

const linkVariants = cva("cursor-pointer font-bold text-xl w-max rounded-md p-1", {
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

export const Link = ({ className, to, children, linkStyle, ...props }: Navlinkprops) => {
  return (
    <NavLink to={to} className={({ isActive }) => isActive && to !== "/" ? cn(linkVariants({ linkStyle }), "bg-primary text-secondary", className) : cn(linkVariants({ linkStyle }), className)} {...props}>{children}</NavLink>
  )
}
