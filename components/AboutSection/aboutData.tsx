import whoWeAre2L from "@/public/images/about/who-we-are-large-2.jpg";
import whoWeAre1L from "@/public/images/about/who-we-are-large-2.jpg";
import whoWeAre2M from "@/public/images/about/who-we-are-medium-2.jpg";
import whoWeAre1M from "@/public/images/about/who-we-are-medium-2.jpg";
import whoWeAre2S from "@/public/images/about/who-we-are-small-2.jpg";
import whoWeAre1S from "@/public/images/about/who-we-are-small-2.jpg";
interface About {
  id: number;
  img: {
    small: string;
    medium: string;
    large: string;
  };
  text: string;
}

const aboutData: About[] = [
  {
    id: 1,
    img: {
      small: whoWeAre2S.src,
      medium: whoWeAre2M.src,
      large: whoWeAre2L.src,
    },
    text: "Колектив Державного підприємства «Науково-дослідний центр проблем надрокористування «Георесурс» НАН України проводить тестування існуючої розробки та обладнання сучасної методики визначення місць знаходження вибухонебезпечних предметів методом пульсуючого електромагнітного зондування (ПЕМЗ)",
  },
  {
    id: 2,
    img: {
      small: whoWeAre1S.src,
      medium: whoWeAre1M.src,
      large: whoWeAre1L.src,
    },
    text: "У рамках проєкту Державного підприємства «Науково-дослідний центр проблем надрокористування «Георесурс» НАН України, спільно з спеціалістами Національної академії внутрішніх справ, ДСНС, Держспецтрансслужби, Сил підтримки Збройних Сил України проводить тестування розробки методики визначення територій знаходження вибухонебезпечних предметів методом пульсуючого електромагнітного зондування.",
  },
];

export default aboutData;
