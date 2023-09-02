import { CSSProperties } from "react";

import heroBg1 from "@/public/images/hero/Group_39525.png";
import heroBg2 from "@/public/images/hero/slide_2.jpg"
import heroBg3 from "@/public/images/hero/slide_3.jpg"
import socrat from "@/public/images/socrat.png";

export interface HeroData {
  id: number;
  title: string;
  caption: string;
  backgroundImage:string;
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
    backgroundImage: heroBg2.src,
    contentImage: socrat.src,
  },
  {
    id: 3,
    title: "Напрямки роботи ДП",
    caption:
      "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    backgroundImage: heroBg3.src,
    contentImage: socrat.src,
  },
];
