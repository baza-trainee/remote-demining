import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Link href={"#"} className={styles.logo}>
          <Image height={149} width={117} src="/icons/logo.svg" alt="logo" />
        </Link>
        <ul className={`${styles.menu} ${styles.category}`}>
          <li className={styles.category__name}>Меню</li>
          <li>
            <Link href="">Про нас</Link>
          </li>
          <li>
            <Link href="">Наукова діяльність</Link>
          </li>
          <li>
            <Link href="">Дистанційне розмінування</Link>
          </li>
          <li>
            <Link href="">Контакти</Link>
          </li>
        </ul>
        <ul className={`${styles.web__rights} ${styles.category}`}>
          <li className={styles.category__name}>Правила</li>
          <li>
            <Link target={"_blank"} href="">
              Політика конфіденційності
            </Link>
          </li>
          <li>
            <Link target={"_blank"} href="">
              Правила користування сайтом
            </Link>
          </li>
          <li>
            <Link target={"_blank"} href="">
              Статут
            </Link>
          </li>
        </ul>
        <ul className={`${styles.contacts} ${styles.category}`}>
          <li className={styles.category__name}>Контакти</li>
          <li className={styles.contacts__list}>
            <Image width={22} height={22} src="/icons/tel.svg" alt="tel" />{" "}
            <span>+38(044)2095302</span>
          </li>
          <li>
            <Link
              className={styles.contacts__list}
              href="mailto:2021snp@ukr.net"
            >
              <Image width={22} height={22} src="/icons/mail.svg" alt="mail" />
              <span>2021snp@ukr.net</span>
            </Link>
          </li>
          <li className={styles.contacts__list}>
            <Image width={22} height={22} src="/icons/map.svg" alt="map" />
            <span>вул. Олеся Гончара 55 б, Київ, Україна 01601</span>
          </li>
        </ul>
      </div>
      <div className={styles.baza}>
        Розробка BazaTraineeUkraine 2023 Всі права захищені
      </div>
    </footer>
  );
};

export default Footer;
