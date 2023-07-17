import styles from "./Drone.module.css";
import classNames from "classnames";

const Drone = () => {
  return (
    <div className={styles.app}>
      <div className={styles["drone-wraper"]}>
        <img className={styles.drone} src="/drone/Drone.svg" alt="alt" />
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
          src="/drone/404.svg"
          alt="alt"
        />
      </div>
    </div>
  );
};

export default Drone;
