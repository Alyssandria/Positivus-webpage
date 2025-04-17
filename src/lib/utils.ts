import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// CLASSNAME MERGE
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}



