import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina clases de Tailwind de manera inteligente
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}