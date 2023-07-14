import styles from "./Drone.module.css";
import classNames from "classnames";

const Drone = () => {
  return (
    <div className={styles.app}>
      <div className={styles["drone-wraper"]}>
        <div className={styles.drone}>
          <img
            className={styles["drone-legs"]}
            src="/drone/droneLegs.svg"
            alt="alt"
          />
          <img
            className={styles["drone-body"]}
            src="/drone/droneBody.svg"
            alt="alt"
          />
          <img
            className={styles["drone-right"]}
            src="/drone/droneRight.svg"
            alt="alt"
          />
          <img
            className={styles["drone-left"]}
            src="/drone/droneLeft.svg"
            alt="alt"
          />
        </div>
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
        <div className={classNames(styles["animated"], styles["text"])}>
          <p>404</p>
        </div>
      </div>
    </div>
  );
};

export default Drone;
