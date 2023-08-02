import socrat from "@/public/images/socrat.png";
import heroBg1 from "@/public/images/hero/heroBg1.jpg";
import { CSSProperties } from "react";

export interface HeroData {
  id: number;
  title: string;
  caption: string;
  backgroundImage: CSSProperties["backgroundImage"];
  contentImage?: string;
}

export const heroData: HeroData[] = [
  {
    id: 3,
    title: "Напрямки роботи ДП",
    caption:
      "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    backgroundImage: heroBg1.src,
    contentImage: socrat.src,
  },
  {
    id: 2,
    title: "Напрямки роботи ДП",
    caption:
      "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    backgroundImage: heroBg1.src,
    contentImage: socrat.src,
  },
  {
    id: 3,
    title: "Напрямки роботи ДП",
    caption:
      "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    backgroundImage: heroBg1.src,
    contentImage: socrat.src,
  },
];
