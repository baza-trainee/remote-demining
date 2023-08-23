import modal_bg from "@/public/images/modal/thanksDes2.png";

import NavLink from "../NavLink/NavLink";

import styles from "./ThankPage.module.css";

interface ThankPageProps {
  toggleModal: () => void
}

const ThankPage: React.FC<ThankPageProps> = ({toggleModal}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${modal_bg.src})` }}
    >
      <div className={styles.message}>
        <h2 className={styles.title}>ДЯКУЄМО</h2>
        <p className={styles.text}>за вашу підтримку!</p>
      </div>
      <div className={styles.btn_container} onClick={toggleModal}>
        <NavLink href="/client" isButton isFullWidth>
        Повернутися на головну сторінку
        </NavLink>
      </div>
    </div>
  );
};

export default ThankPage;
