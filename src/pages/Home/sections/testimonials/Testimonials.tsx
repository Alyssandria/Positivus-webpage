import CONTENT from "@/lib/content/en_us.json"
import { ClientTestimony } from "./components/ClientTestimony"
import { MoveLeft, MoveRight } from "lucide-react"
import { CarouselIcon } from "@/components/icons/CarouselIcon"
import { useEffect, useRef, useState, UIEvent } from "react"
export const Testimonials = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.TESTIMONIALS.TITLE;
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.TESTIMONIALS.SUB_TITLE;

  const CLIENTS = CONTENT.PUBLIC.MAIN.HOME.TESTIMONIALS.CLIENTS;
  const clientCards = CLIENTS.map(data => {
    return (
      <ClientTestimony key={data.NAME} data={data} />
    )
  })

  // CAROUSEL LOGIC
  const STEP = 1 // AMOUNT TO DECREMENT OR INCREMENT BY
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselContainer = useRef<HTMLDivElement | null>(null);
  const nextButton = useRef<HTMLButtonElement | null>(null);
  const prevButton = useRef<HTMLButtonElement | null>(null);

  const carouselIcons = CLIENTS.map((_, i) => {
    return (
      <CarouselIcon key={i} isActive={activeIndex === i ? true : false} className="size-3" />
    )
  })

  const toggleCarouselButtonState = (button: React.RefObject<HTMLButtonElement | null>, condition: boolean): void => {
    if (!button.current) return;

    if (condition) {
      button.current.disabled = true;
      button.current.classList.add("carousel-disabled");
    } else {
      button.current.disabled = false;
      button.current.classList.remove("carousel-disabled");
    }
  }

  const handleClickPrev = () => {
    if (!carouselContainer.current) return;

    setActiveIndex((prev: number) => Math.max(0, prev - STEP));
    const carouselElemWidth = carouselContainer.current.firstElementChild!.getBoundingClientRect().width;
    const containerGap = parseFloat(window.getComputedStyle(carouselContainer.current).gap);

    // SCROLL THE ELEMENT BY THE ELEMENT WIDTH + GAP
    carouselContainer.current.scrollLeft = carouselContainer.current.scrollLeft - (carouselElemWidth + containerGap);
  }

  const handleCLickNext = () => {
    if (!carouselContainer.current) return;

    setActiveIndex((prev: number) => Math.min(CLIENTS.length - 1, prev + STEP));
    const carouselElemWidth = carouselContainer.current.firstElementChild!.getBoundingClientRect().width;
    const containerGap = parseFloat(window.getComputedStyle(carouselContainer.current).gap);

    // SCROLL THE ELEMENT BY THE ELEMENT WIDTH + GAP
    carouselContainer.current.scrollLeft = (activeIndex + STEP) * (carouselElemWidth + containerGap);
  }

  function handleCarouselNav(event: UIEvent<HTMLDivElement>): void {
    // TODO: HANDLE SWIP SCROLL
  }

  return (
    <section className="p-4 space-y-6">
      <div className="space-y-6">
        <h3 className="text-center">
          <span className="section-heading">{TITLE}</span>
        </h3>
        <p className="text-center font-medium">{SUBTITLE}</p>
      </div>

      <div className="bg-secondary">
        <div ref={carouselContainer} className="w-full h-max flex p-8 rounded-[45px] cards-swipe overflow-x-scroll gap-10" onScroll={handleCarouselNav}>
          {clientCards}
        </div>

        <div className="flex justify-around items-center">
          <button onClick={handleClickPrev} className={activeIndex === 0 ? "carousel-disabled" : ""} disabled={activeIndex === 0}>
            <MoveLeft className="stroke-white size-8" />
          </button>
          <div className="flex gap-2">
            {carouselIcons}
          </div>
          <button onClick={handleCLickNext} className={activeIndex === CLIENTS.length - 1 ? "carousel-disabled" : ""} disabled={activeIndex === CLIENTS.length - 1}>
            <MoveRight className="stroke-white size-8" />
          </button>
        </div>
      </div>
    </section>
  )
} 
