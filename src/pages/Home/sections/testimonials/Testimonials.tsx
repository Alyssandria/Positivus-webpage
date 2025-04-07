import CONTENT from "@/lib/content/en_us.json"
import { ClientTestimony } from "./components/ClientTestimony"
import { MoveLeft, MoveRight } from "lucide-react"
import { CarouselIcon } from "@/components/icons/CarouselIcon"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
export const Testimonials = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.TESTIMONIALS.TITLE;
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.TESTIMONIALS.SUB_TITLE;

  const CLIENTS = CONTENT.PUBLIC.MAIN.HOME.TESTIMONIALS.CLIENTS;
  const clientCardRefs = useRef<(HTMLElement | null)[]>([]) // TO GET THE HTMLElement
  const clientCardsRefMap = useRef<Map<HTMLElement | null, number>>(new Map()) // TO STORE THE HTML ELEMENT FOR LOOKUPS
  const clientCards = CLIENTS.map((data, i) => {
    return (
      <ClientTestimony key={data.NAME} data={data}
        ref={
          (el) => {
            clientCardRefs.current[i] = el;
            clientCardsRefMap.current.set(el, i);
          }}
      />
    )
  })

  // CAROUSEL LOGIC
  const STEP = 1 // AMOUNT TO DECREMENT OR INCREMENT BY
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselContainer = useRef<HTMLDivElement | null>(null);
  const intersectionObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!carouselContainer.current) return;
    intersectionObserver.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = clientCardsRefMap.current.get(entry.target as HTMLElement)
          if (index !== undefined && activeIndex !== index) {
            setActiveIndex(index)
          }
        }
      },);
    }, { root: carouselContainer.current, threshold: .90 });

    clientCardRefs.current.forEach((el) => {
      if (el) intersectionObserver.current!.observe(el)
    });
  }, [activeIndex]);

  const carouselIcons = CLIENTS.map((_, i) => {
    return (
      <CarouselIcon key={i} isActive={activeIndex === i ? true : false} className="size-3" />
    )
  })

  const handleClickPrev = () => {
    if (!carouselContainer.current) return;
    carouselContainer.current.children[activeIndex - STEP].firstElementChild?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCLickNext = () => {
    if (!carouselContainer.current) return;
    carouselContainer.current.children[activeIndex + STEP].firstElementChild?.scrollIntoView({ behavior: "smooth" })
  }



  return (
    <section className="p-4 space-y-6">
      <div className="space-y-6">
        <h3 className="text-center">
          <span className="section-heading">{TITLE}</span>
        </h3>
        <p className="text-center font-medium">{SUBTITLE}</p>
      </div>

      <svg>
        <path d="M-5-14h107v161H-5z" />
      </svg>

      <div className="bg-secondary p-6 pb-8 space-y-6 rounded-[45px]">
        <div ref={carouselContainer} className="w-full flex items-center rounded-[45px] cards-swipe overflow-x-scroll gap-10">
          {clientCards}
        </div>

        <div className="flex justify-around items-center">
          <button onClick={handleClickPrev} className={cn(activeIndex === 0 ? "carousel-disabled" : "")} disabled={activeIndex === 0}>
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
