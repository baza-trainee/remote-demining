import classNames from "classnames";

import text404Image from "@/public/drone/404.svg";
import drone from "@/public/drone/Drone.svg";

import styles from "./Drone.module.css";

const Drone = () => {
  return (
    <div className={styles.app}>
      <div className={styles["drone-wraper"]}>
        <img className={styles.drone} src={drone.src} alt="alt" />
      </div>

      <div className={styles.wraper}>
        <div className={classNames(styles["animated"], styles["scaner"])}></div>
        <div
          className={classNames(
            styles["animated"],
            styles["box"],
            styles["box-left"]
          )}
        ></div>
        <div
          className={classNames(
            styles["animated"],
            styles["box"],
            styles["box-right"]
          )}
        ></div>
        <img
          className={classNames(styles["animated"], styles["text"])}
          src={text404Image.src}
          alt="alt"
        />
      </div>
    </div>
  );
};

export default Drone;
