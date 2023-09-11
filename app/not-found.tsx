import NavLink from "@/components/NavLink/NavLink";

import Drone from "./[...not_found]/_Drone/Drone";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div>
      <div className={styles.wraper}>
        <Drone />
        <div className={styles.content}>
          <div className={styles.text}>
            <p>Шкода, але сторінку не знайдено. </p>
            <p>Можливо, її перенесли або видалили.</p>
          </div>
          <NavLink isButton href="/">
            Повернутися на Головну
          </NavLink>
        </div>
      </div>
    </div>
  );
}
