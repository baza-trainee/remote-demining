import styles from "./Footer.module.css";
import logo from "./icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import tel from "./icons/tel.svg";
import mail from "./icons/mail.svg";
import map from "./icons/map.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Link href="" className={styles.logo}>
          <Image src={logo} alt="logo" />
        </Link>
        <div className={`${styles.menu} ${styles.category}`}>
          <h4>Меню</h4>
          <Link href="">
            <p>Про нас</p>
          </Link>
          <Link href="">
            <p>Наукова діяльність</p>
          </Link>
          <Link href="">
            <p>Наукова діяльність</p>
          </Link>
          <Link href="">
            <p>Контакти</p>
          </Link>
        </div>
        <div className={`${styles.web__rights} ${styles.category}`}>
          <h4>Правила</h4>
          <Link href="">
            <p>Політика конфіденційності</p>
          </Link>
          <Link href="">
            <p>Правила користування</p>
          </Link>
        </div>
        <div className={`${styles.contacts} ${styles.category}`}>
          <h4>Контакти</h4>
          <Link href="">
            <p className={styles.contacts__list}><Image src={tel} alt="tel" /> <span>+38(044)2095302</span> </p>
          </Link>
          <Link href="">
            <p className={styles.contacts__list}> <Image src={mail} alt="mail" /> <span>2021snp@ukr.net</span> </p>
          </Link>
          <Link href="">
            <p className={styles.contacts__list}><Image src={map} alt="map" /> <span>вул. Олеся Гончара 55 б, Київ, Україна 01601</span></p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
