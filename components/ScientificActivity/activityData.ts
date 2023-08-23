import { StaticImageData } from "next/image";

import activity1 from "@/public/images/activity/activity-1.jpg";
import activity2 from "@/public/images/activity/activity-2.jpg";
import activity3 from "@/public/images/activity/activity-3.jpg";
import activity4 from "@/public/images/activity/activity-4.jpg";
import activity5 from "@/public/images/activity/activity-5.jpg";

export interface ActivityListItemData {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
}

const activityData: ActivityListItemData[] = [
  {
    title: "Інновації",
    description:
      "Колектив ДП НДЦПН «Георесурс» НАН України разом з спеціалістами Національної академії внутрішніх справ, ДСНС, Держспецтрансслужби, Сил підтримки Збройних Сил України проводить тестування новітнього методу дистанційного розмінування територій.",
    image: activity1,
  },
  {
    title: "Методика",
    description:
      "Методика полягає в тому, що квадрокоптер, знаходячись над землею, визначає місцезнаходження мін методом електромагнітного зондування. Методика визначає, де знаходяться металеві та неметалеві вибухонебезпечні предмети, де саме і наскільки глибоко в землі. Роботи виконуються без безпосередньої участі людини на забрудненій території.",
    image: activity2,
  },
  {
    title: "Дистанційність",
    description:
      "Це принципово новий підхід, що дозволяє оперативно в дистанційному режимі з використанням БПЛА проводити дослідження по виявленню локації мін та після обробки даних надавати карту їх знаходження з прив’язкою до системи координат JPS.",
    image: activity3,
  },
  {
    title: "Важливість",
    description:
      "На території України є необхідність забезпечити маркування  і складення карт територій України та об’єктів, забруднених та імовірно забруднених вибухонебезпечними предметами задля безпеки українців.",
    image: activity4,
  },
  {
    title: "Актуальність",
    description:
      "Визначення місць з чіткими координатами вибухонебезпечних предметів надасть дуже велику допомогу ізолювання небезпечних місць та пришвидшить в рази можливість гуманітарного розмінування територій України.",
    image: activity5,
  },
].map((item) => ({
  id: crypto.randomUUID(),
  ...item,
}));

export default activityData;
