import Image from "next/image";

import close_modal from "@/public/images/icons/header/btn_close_burger.svg";
import modal_bg from '@/public/images/modal/thanksDes.png'

import NavLink from "../NavLink/NavLink";

import styles from "./ThankPage.module.css";

interface ThankPageProps {
  toggleModal: () => void;
}

const ThankPage: React.FC<ThankPageProps> = ({toggleModal}) => {
  return (
    <div className={styles.container} style={{backgroundImage: `url(${modal_bg.src})` }}>
      <div className={styles.message} >
        <h2 className={styles.title}>ДЯКУЄМО</h2>
        <p className={styles.text} >за вашу підтримку!</p>
      </div>
      <NavLink href={"#"} isButton>ПОВЕРНУТИСЬ НА ГОЛОВНУ СТОРІНКУ</NavLink>
      <button className={styles.btn_close} onClick={toggleModal}>
        
        <Image
          className={styles.close_icon}
          src={close_modal}
          alt="close modal"
          width={25.852943420410156}
          height={30}
        ></Image>
      </button>
    </div>
  );
};

export default ThankPage;
