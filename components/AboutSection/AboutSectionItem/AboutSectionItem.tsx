import NavLink from "@/components/NavLink/NavLink";

import css from "./aboutSectionItem.module.css";

interface AboutSectionItemProps {
  text: string;
  img: {
    small: string;
    medium: string;
    large: string;
  };
}

const AboutSectionItem: React.FC<AboutSectionItemProps> = ({ img, text }) => {
  return (
    <li className={css.aboutItem}>
      <div className={css.contentWrapper}>
        <picture>
          <source media="(max-width: 767px)" srcSet={img.small} />
          <source media="(max-width: 1279px)" srcSet={img.medium} />
          <img src={img.large} alt="About Us" className={css.image} />
        </picture>
        <div className={css.imgDescription}>
          <p className={css.text}>{text}</p>
          <NavLink href="#" isFullWidth isMoreInfo>
            Детальніше
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default AboutSectionItem;
