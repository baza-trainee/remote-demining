import styles from "./HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <h3 className={styles.logo}>
      <span className={styles.sub_logo}>
      </span>
    </h3>
  );
}

export default HeaderLogo;