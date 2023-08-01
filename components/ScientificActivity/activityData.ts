import activity1 from "@/public/images/activity/activity-1.jpg";
import activity2 from "@/public/images/activity/activity-2.jpg";
import activity3 from "@/public/images/activity/activity-3.jpg";
import activity4 from "@/public/images/activity/activity-4.jpg";
import activity5 from "@/public/images/activity/activity-5.jpg";
import { StaticImageData } from "next/image";

export interface ActivityListItemData {
  title: string;
  description: string;
  image: StaticImageData;
}

const activityData: ActivityListItemData[] = [
  {
    title: "Інновації",
    description:
      "Колектив ДП НДЦПН«Георесурс»» НАН України разом з спеціалістами Національної академії внутрішніх справ, ДСНС, Держспецтрансслужби, Сил підтримки Збройних Сил України проводить тестування новітнього методу дистанційного розмінування територій.",
    image: activity1,
  },
  {
    title: "Методика",
    description:
      "Колектив ДП НДЦПН«Георесурс»» НАН України разом з спеціалістами Національної академії внутрішніх справ, ДСНС, Держспецтрансслужби, Сил підтримки Збройних Сил України проводить тестування новітнього методу дистанційного розмінування територій.",
    image: activity2,
  },
  {
    title: "Дистанційність",
    description:
      "Колектив ДП НДЦПН«Георесурс»» НАН України разом з спеціалістами Національної академії внутрішніх справ, ДСНС, Держспецтрансслужби, Сил підтримки Збройних Сил України проводить тестування новітнього методу дистанційного розмінування територій.",
    image: activity3,
  },
  {
    title: "Важливість",
    description:
      "Колектив ДП НДЦПН«Георесурс»» НАН України разом з спеціалістами Національної академії внутрішніх справ, ДСНС, Держспецтрансслужби, Сил підтримки Збройних Сил України проводить тестування новітнього методу дистанційного розмінування територій.",
    image: activity4,
  },
  {
    title: "Актуальність",
    description:
      "Колектив ДП НДЦПН«Георесурс»» НАН України разом з спеціалістами Національної академії внутрішніх справ, ДСНС, Держспецтрансслужби, Сил підтримки Збройних Сил України проводить тестування новітнього методу дистанційного розмінування територій.",
    image: activity5,
  },
];

export default activityData;
