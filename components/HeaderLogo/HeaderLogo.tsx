import Link from "next/link";
import styles from "./HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <div className={styles.logo_container}>
      <Link href={"/"}>
        <h3 className={styles.logo}>
          <span className={styles.sub_logo}></span>
        </h3>
      </Link>
    </div>
  );
};

export default HeaderLogo;
