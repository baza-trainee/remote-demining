import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavLink from "@/components/NavLink/NavLink";

import Drone from "./[...not_found]/_Drone/Drone";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}
