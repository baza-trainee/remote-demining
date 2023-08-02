import { Icon } from "react-icons-kit";
import {pen_1} from 'react-icons-kit/ikons/pen_1'

import styles from "./AdminEditContactsInput.module.css";

const AdminEditContactsInput = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.input__container} ${styles.contact__input__container}`}>
        <label htmlFor="tel">Телефони</label>
        <input className={styles.input} type="tel" name="tel" placeholder="" />
        <span className={styles.pen}>
          <Icon icon={pen_1} size={25} />
      </span>
      </div>
      <div className={`${styles.input__container} ${styles.contact__input__container}`}>
        <label className={styles.label__mail} htmlFor="mail">Електронна пошта</label>
        <input className={styles.input} type="email" name="mail" placeholder=""/>
        <span className={styles.pen}>
          <Icon icon={pen_1} size={25} />
      </span>
      </div>
   
    </div>
  );
};
export default AdminEditContactsInput;
