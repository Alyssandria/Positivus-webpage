import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: string;
  subTitle: string;
}
export const Section = ({ title, subTitle, children, className, ...props }: SectionProps) => {
  return (
    <section className={cn("p-4 flex flex-col gap-6 sm:p-8 lg:gap-20", className)} {...props}>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <h3 className="text-center lg:text-left lg:w-fit">
          <span className="section-heading lg:text-4xl">{title}</span>
        </h3>
        <p className="text-center font-medium lg:text-left lg:w-2/5">{subTitle}</p>
      </div>
      {children}
    </section>
  )
}
