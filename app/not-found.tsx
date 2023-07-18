import NavLink from "@/components/NavLink/NavLink";
import Drone from "./[...not_found]/_Drone/Drone";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wraper}>
      <Drone />
      <div className={styles.content}>
        <p>Вибачте! Сторінка загубилася</p>
        <NavLink isButton href="/">
          Повернутися на Головну
        </NavLink>
      </div>
    </div>
  );
}
