import CONTENT from "@/lib/content/en_us.json"
import { ClientTestimony } from "./components/ClientTestimony"
import { MoveLeft, MoveRight } from "lucide-react"
import { CarouselIcon } from "@/components/icons/CarouselIcon"
import { useEffect, useRef, useState } from "react"
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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const nextButton = useRef<HTMLButtonElement | null>(null)
  const prevButton = useRef<HTMLButtonElement | null>(null)

  const carouselIcons = CLIENTS.map((_, i) => {
    return (
      <CarouselIcon key={i} isActive={activeIndex === i ? true : false} className="size-3" />
    )
  })

  const toggleCarouselButtonState = (button: React.RefObject<HTMLButtonElement | null>, condition: boolean): void => {
    if (!button.current) return;

    if (condition) {
      button.current.disabled = true
      button.current.classList.add("carousel-disabled");
    } else {
      button.current.classList.remove("carousel-disabled");
    }
  }

  useEffect(() => {
    if (!nextButton.current || !prevButton.current) return

    // DISABLE BUTTONS
    toggleCarouselButtonState(prevButton, activeIndex === 0);
    toggleCarouselButtonState(nextButton, activeIndex === CLIENTS.length - 1);


    const handleNext = () => {
      setActiveIndex((prev) => prev + 1);
    }

    const handlePrev = () => {
      setActiveIndex((prev) => prev - 1);
    }

    nextButton.current.addEventListener("click", handleNext);
    prevButton.current.addEventListener("click", handlePrev);


    return () => {
      nextButton.current?.removeEventListener("click", handleNext);
      prevButton.current?.removeEventListener("click", handlePrev);
    }
  }, [activeIndex, nextButton, prevButton])

  console.log(activeIndex);
  return (
    <section className="p-4 space-y-6">
      <div className="space-y-6">
        <h3 className="text-center">
          <span className="section-heading">{TITLE}</span>
        </h3>
        <p className="text-center font-medium">{SUBTITLE}</p>
      </div>

      <div className="bg-secondary">
        <div className="flex p-8 rounded-[45px] overflow-clip space-x-10">
          {clientCards}
        </div>

        <div className="flex justify-around items-center">
          <button ref={prevButton}>
            <MoveLeft className="stroke-white size-8" />
          </button>
          <div className="flex gap-2">
            {carouselIcons}
          </div>
          <button ref={nextButton}>
            <MoveRight className="stroke-white size-8" />
          </button>
        </div>
      </div>
    </section>
  )
} 
