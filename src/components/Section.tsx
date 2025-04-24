import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: string;
  subTitle: string;
}
export const Section = ({ title, subTitle, children, className, ...props }: SectionProps) => {
  return (
    <section className={cn("p-4 space-y-6 sm:p-8", className)} {...props}>
      <div className="space-y-6">
        <h3 className="text-center">
          <span className="section-heading">{title}</span>
        </h3>
        <p className="text-center font-medium">{subTitle}</p>
      </div>
      {children}
    </section>
  )
}
