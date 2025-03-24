import { LinkArrowIcon } from "@/components/icons/LinkArrowIcon";
import { Link } from "@/components/ui/Link";
import CONTENT from "@/lib/content/en_us.json"
export const CaseStudyCards = () => {
  const cardsArr = CONTENT.PUBLIC.MAIN.HOME.CASESTUDIES.CASES
  const cards = cardsArr.map((el) => {
    return (
      <li key={el.CTA.PATH} className="w-[95%] shrink-0 snap-center flex justify-between flex-col gap-4 bg-secondary rounded-[45px] p-8">
        <div>
          <p className="text-white text-sm font-normal">{el.CONTENT}</p>
        </div>

        <Link to={el.CTA.PATH} className="font-medium text-base text-primary inline-flex items-end gap-2">
          <span className="">
            {el.CTA.CONTENT}
          </span>
          <LinkArrowIcon className="size-8" />
        </Link>
      </li>)
  });

  return (
    <ul className="flex w-full gap-2 cards-swipe p-4 overflow-x-scroll">{cards}</ul>
  )
}
