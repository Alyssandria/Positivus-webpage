import CONTENT from "@/lib/content/en_us.json"
import { ClientTestimony } from "./components/ClientTestimony"
import { MoveLeft, MoveRight } from "lucide-react"
import { CarouselIcon } from "@/components/icons/CarouselIcon"
import { useRef, useState, useEffect } from "react"
import { Section } from "@/components/Section"

export const Testimonials = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.TESTIMONIALS.TITLE;
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.TESTIMONIALS.SUB_TITLE;

  const CLIENTS = CONTENT.PUBLIC.MAIN.HOME.TESTIMONIALS.CLIENTS;
  const clientCardRefs = useRef<(HTMLElement | null)[]>([]) // TO GET THE HTMLElement
  const clientCardsRefMap = useRef<Map<HTMLElement | null, number>>(new Map()) // TO STORE THE HTML ELEMENT FOR LOOKUPS
  const clientCards = CLIENTS.map((data, i) => {
    return (
      <ClientTestimony key={data.NAME} data={data} className="md:w-4/5"
        ref={
          (el) => {
            clientCardRefs.current[i] = el;
            clientCardsRefMap.current.set(el, i + 1); // + 1 OFFSET FOR THE CLONES
          }}
      />
    )
  })

  // CAROUSEL LOGIC
  const STEP = 1 // AMOUNT TO DECREMENT OR INCREMENT BY
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const carouselContainer = useRef<HTMLDivElement | null>(null);
  const intersectionObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!carouselContainer.current) return;
    console.log(carouselContainer.current.children)

    carouselContainer.current.children[1].scrollIntoView({ behavior: "instant" })
  }, []);

  useEffect(() => {
    if (!carouselContainer.current) return;
    intersectionObserver.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          const index = clientCardsRefMap.current.get(entry.target as HTMLElement)
          console.log(index);
          if (index !== undefined && activeIndex !== index) setActiveIndex(index)
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
    carouselContainer.current.children[activeIndex - STEP].firstElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  const handleCLickNext = () => {
    if (!carouselContainer.current) return;
    carouselContainer.current.children[activeIndex + STEP].firstElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }



  return (
    <Section title={TITLE} subTitle={SUBTITLE}>
      <div className="bg-secondary p-6 pb-8 flex flex-col gap-6 items-center rounded-[45px]">
        <div ref={carouselContainer} className="w-full flex items-center rounded-[45px] cards-swipe overflow-x-scroll gap-10">
          <ClientTestimony data={CLIENTS[CLIENTS.length - 1]} className="md:w-1/2" ref={(el) => { clientCardsRefMap.current.set(el, 7) }} />
          {clientCards}
          <ClientTestimony data={CLIENTS[0]} className="md:w-1/2" ref={(el) => { clientCardsRefMap.current.set(el, 0) }} />
        </div>

        <div className="flex justify-around items-center md:w-1/2">
          <button onClick={handleClickPrev}>
            <MoveLeft className="stroke-white size-8" />
          </button>
          <div className="flex gap-2">
            {carouselIcons}
          </div>
          <button onClick={handleCLickNext}>
            <MoveRight className="stroke-white size-8" />
          </button>
        </div>
      </div>
    </Section>
  )
} 
