import AboutSectionItem from '../AboutSectionItem/AboutSectionItem';

import css from './aboutSectionList.module.css'

interface AboutSectionListProps {
  items: {
    id: number;
    img: string;
    text: string;
  }[];
}

const AboutSectionList: React.FC<AboutSectionListProps> = ({ items }) => {
  return (
    <ul className={css.listWrapper}>
      {items.map((item) => (
        <AboutSectionItem key={item.id} img={item.img} text={item.text} />
      ))}
    </ul>
  )
}

export default AboutSectionList