import { UserAvatar } from "@/components/icons/UserAvatar";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
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
    <div className={cn("w-full service-card-shadow border rounded-4xl max-xs:p-card p-card-mob divide-y space-y-8 divide-black", className)} {...props}>
      <div className="flex relative gap-4 w-full pb-6 sm:gap-8">
        <figure className="w-52 sm:max-w-24">
          <UserAvatar imgLink={data.PROFILE} className="size-full" />
          <figcaption className="sr-only">{`An avatar of ${data.NAME}`}</figcaption>
        </figure>
        <div className="w-full flex flex-col gap-1 justify-end">
          <span className="font-bold block max-xs:w-min text-lg ">{data.NAME}</span>
          <span className="inline-block font-medium">{data.TITLE}</span>
        </div>
        <div className="absolute p-2 size-8 top-0 right-0 bg-secondary rounded-full">
          <Linkedin className="size-full text-primary fill-primary" />
        </div>
      </div>
      <div>
        <p className="font-medium">{data.BIO}</p>
      </div>


    </div>
  );
};
