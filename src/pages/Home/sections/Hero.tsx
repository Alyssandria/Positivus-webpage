import { AmazonLogo } from "@/components/icons/AmazonLogo";
import { DribbleLogo } from "@/components/icons/DribbleLogo";
import { HeroIllustration } from "@/components/icons/HeroIllustration"
import { HubSpotLogo } from "@/components/icons/HubSpotLogo";
import { NetflixLogo } from "@/components/icons/NetflixLogo";
import { NotionLogo } from "@/components/icons/NotionLogo";
import { ZoomLogo } from "@/components/icons/ZoomLogo";
import { Link } from "@/components/ui/Link"
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CONTENT from "@/lib/content/en_us.json"
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap"

export const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const brandsRowUpper = useRef<HTMLDivElement | null>(null);
  const brandsRowLower = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    if (!brandsRowUpper || !brandsRowLower) return
    gsap.set(brandsRowLower.current, { xPercent: 100 });
    gsap.set(brandsRowUpper.current, { xPercent: -100 });

    tl.current = gsap.timeline({ paused: true })
      .to(brandsRowUpper.current,
        {
          duration: 25,
          xPercent: 100,
          repeat: -1,
          ease: 'none'
        })
      .to(brandsRowLower.current,
        {
          duration: 25,
          xPercent: -100,
          repeat: -1,
          ease: "none"
        }, "<");



  },);

  useEffect(() => {
    if (!tl.current) return;

    if (isMobile) {
      tl.current.play();
    }
    else {
      tl.current.paused(true);
      tl.current.kill();
      gsap.set(brandsRowLower.current, { xPercent: 0 });
      gsap.set(brandsRowUpper.current, { xPercent: 0 });
    };
  }, [isMobile])



  return (
    <section className="w-full">
      <div className="p-4 flex flex-col gap-6 sm:p-8 lg:grid lg:grid-cols-2">
        <h1 className="text-4xl font-medium lg:h-fit lg:text-6xl xl:text-7xl 2xl:text-8xl">{CONTENT.PUBLIC.MAIN.HOME.HERO.TITLE.CONTENT}</h1>
        <div className="row-span-3">
          <HeroIllustration className="size-full" />
        </div>
        <p className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl 2xl:w-4/5">{CONTENT.PUBLIC.MAIN.HOME.HERO.SUB_TITLE.CONTENT}</p>
        <Link to={CONTENT.PUBLIC.MAIN.HOME.HERO.CTA.ACTION} linkStyle="button_bg" className="inline-block w-full text-center text-base lg:h-fit lg:self-center lg:w-fit">{CONTENT.PUBLIC.MAIN.HOME.HERO.CTA.CONTENT}</Link>
      </div>
      <div className="flex flex-col md:flex-row sm:px-8">
        <div ref={brandsRowUpper} className="flex justify-around w-full items-center top-0 md:justify-between" >
          <AmazonLogo />
          <DribbleLogo />
          <HubSpotLogo />
        </div>
        <div ref={brandsRowLower} className="flex gap-4 w-full items-center bottom-0 md:justify-between">
          <NetflixLogo />
          <NotionLogo />
          <ZoomLogo />
        </div>
      </div>
    </section>
  )
}
