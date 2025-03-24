import { TeamBg } from "@/components/icons/TeamBg";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";


interface TeamCardProps extends HTMLAttributes<HTMLDivElement> {
  data: {
    NAME: string,
    TITLE: string,
    BIO: string,
    PROFILE: string
  }
}
export const TeamCard = ({ className, data, ...props }: TeamCardProps) => {

  return (
    <div className={cn("w-full", className)} {...props}>
      <TeamBg imgLink={data.PROFILE} />
    </div>
  );
};
