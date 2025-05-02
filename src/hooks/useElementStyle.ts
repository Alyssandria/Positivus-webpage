import { RefObject, useEffect, useState } from "react";

export const useElementStyle = (elementRef: RefObject<HTMLElement | null>) => {
  const [elementStyle, setElementStyle] = useState<CSSStyleDeclaration | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    setElementStyle(getComputedStyle(elementRef.current))

  }, [elementRef]);

  return elementStyle
}
