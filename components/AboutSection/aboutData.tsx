
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
      small: '/images/about/who-we-are-small-2.jpg',
      medium: '/images/about/who-we-are-medium-2.jpg',
      large: '/images/about/who-we-are-large-2.jpg',
    },
    text: 'Колектив Державного підприємства «Науково-дослідний центр проблем надрокористування «Георесурс»» НАН України проводить тестування існуючої розробки та обладнання сучасної методики визначення місць знаходження вибухонебезпечних предметів методом пульсуючого електромагнітного зондування (ПЕМЗ)',
  },
  {
    id: 2,
    img: {
      small: '/images/about/who-we-are-small-1.jpg',
      medium: '/images/about/who-we-are-medium-1.jpg',
      large: '/images/about/who-we-are-large-1.jpg',
    },
    text: 'У рамках проекту Державного підприємства «Науково-дослідний центр проблем надрокористування «Георесурс» НАН України, спільно з спеціалістами Національної академії внутрішніх справ, ДСНС, Держспецтрансслужби, Сил підтримки Збройних Сил України проводить тестування розробки методики визначення територій знаходження вибухонебезпечних предметів методом пульсуючого електромагнітного зондування.',
  },
];

export default aboutData;
