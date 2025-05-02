import { useEffect, useState } from "react";

interface useMediaQueryParams {
  maxWidth?: number,
  minWidth?: number
}

export const useMediaQuery = ({ maxWidth, minWidth }: useMediaQueryParams) => {
  const [mediaSize, setMediaSize] = useState<number>(window.innerWidth);


  const handleResize = () => {
    setMediaSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  if (maxWidth) return maxWidth > mediaSize || false
  if (minWidth) return minWidth < mediaSize || false

}
