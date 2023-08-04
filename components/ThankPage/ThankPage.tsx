
import modal_bg from "@/public/images/modal/thanksDes.png";

import NavLink from "../NavLink/NavLink";

import styles from "./ThankPage.module.css";

interface ThankPageProps {}

const ThankPage: React.FC<ThankPageProps> = ({}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${modal_bg.src})` }}
    >
      <div className={styles.message}>
        <h2 className={styles.title}>ДЯКУЄМО</h2>
        <p className={styles.text}>за вашу підтримку!</p>
      </div>
      <NavLink href={"#"} isButton>
        ПОВЕРНУТИСЬ НА ГОЛОВНУ СТОРІНКУ
      </NavLink>
    </div>
  );
};

export default ThankPage;
