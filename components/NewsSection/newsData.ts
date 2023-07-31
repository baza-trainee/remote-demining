import NewsIMG from "@/public/images/projects/robot-hand.jpg";
export interface News {
  id: number;
  img: string;
  text: string;
  title: string;
}
const tmpText =
  "Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами.";
const tmpTitle = "Title";
const newsData: News[] = [
  {
    id: 1,
    img: NewsIMG.src,
    text: tmpText,
    title: tmpTitle,
  },
  {
    id: 1,
    img: NewsIMG.src,
    text: tmpText,
    title: tmpTitle,
  },
  {
    id: 1,
    img: NewsIMG.src,
    text: tmpText,
    title: tmpTitle,
  },
];

export default newsData;
