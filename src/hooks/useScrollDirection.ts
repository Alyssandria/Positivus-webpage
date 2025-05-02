import { useEffect, useRef, useState } from "react";

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState<number>(0);
  const lastScroll = useRef(window.scrollY);
  const treshhold = 0;

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      const diff = scrollY - lastScroll.current;
      if (diff > treshhold) setScrollDir(-1);
      if (diff < treshhold) setScrollDir(1);

      lastScroll.current = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", () => window.requestAnimationFrame(handleScroll))

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollDir])


  return scrollDir;
}
