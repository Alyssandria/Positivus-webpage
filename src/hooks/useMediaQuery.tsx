import { useEffect, useState } from "react";

interface useMediaQueryParams {
  maxWidth?: number,
  minWidth?: number
}

export const useMediaQuery = (options?: useMediaQueryParams) => {
  const [mediaSize, setMediaSize] = useState<number>(window.innerWidth);


  const handleResize = () => {
    setMediaSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const returnObj = {}
  if (!options) return { width: mediaSize }

  if (options.maxWidth) return { width: mediaSize, matches: options.maxWidth > mediaSize || false }
  if (options.minWidth) return { ...returnObj, matches: options.minWidth < mediaSize || false }

}
