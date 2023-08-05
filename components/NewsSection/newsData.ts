import News_one from "@/public/images/news/news1.png";
import News_two from "@/public/images/news/news2.png";
import News_three from "@/public/images/news/news3.png";
export interface News {
  id: number;
  img: string;
  text: string;
  title: string;
}
const newsData: News[] = [
  {
    id: 1,
    img: News_one.src,
    text: "In a year and a half of conflict, land mines — along with unexploded bombs, artillery shells and other...",
    title: "Ukraine is now the most mined country. It will take decades to make safe. — The Washington Post.",
  },
  {
    id: 1,
    img: News_two.src,
    text: "Захід відбувся 17 травня 2023 року в Києві...",
    title: "Науковці НАН України представили свої розробки на форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
  },
  {
    id: 1,
    img: News_three.src,
    text: "Науковці Академії продемонструють свої розр...",
    title: "Установи НАН України візьмуть участь у форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
  },
];

export default newsData;
