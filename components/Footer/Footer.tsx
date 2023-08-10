import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/footer/logo.svg';
import mail from '@/public/images/footer/mail.svg';
import map from '@/public/images/footer/map.svg';
import tel from '@/public/images/footer/tel.svg';

import Container from '../Container/Container';
import NavLink from '../NavLink/NavLink';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <Link href={'#'} className={styles.logo}>
            <Image height={149} width={117} src={logo} alt="logo" />
          </Link>
          <ul className={`${styles.menu} ${styles.category}`}>
            <li>
              <NavLink href="/">Про нас</NavLink>
            </li>
            <li>
              <NavLink href="/client/activity">Наукова діяльність</NavLink>
            </li>
            <li>
              <NavLink href="/client/socrat">Дистанційне розмінування</NavLink>
            </li>
            <li>
              <NavLink href="/client/contacts">Контакти</NavLink>
            </li>
          </ul>
          <ul className={`${styles.web__rights} ${styles.category}`}>
            <li>
              <Link href="">Політика конфіденційності</Link>
            </li>
            <li>
              <Link href="">Правила користування сайтом</Link>
            </li>
            <li>
              <Link href="">Статут</Link>
            </li>
          </ul>
          <ul className={`${styles.contacts} ${styles.category}`}>
            <li className={styles.contacts__item}>
              <Image width={22} height={22} src={tel} alt="tel" />{' '}
              <span>+38 (044) 209 5302</span>
            </li>
            <li className={styles.contacts__item}>
              <Image width={22} height={22} src={mail} alt="mail" />
              <span>2021snp@ukr.net</span>
            </li>
            <li className={styles.contacts__item}>
              <Image width={22} height={22} src={map} alt="map" />
              <span>вул. Олеся Гончара 55 б, Київ, Україна 01601</span>
            </li>
          </ul>
        </div>
        <div className={styles.baza}>
          Розробка Baza Trainee Ukraine 2023 <br className={styles.br}/> Всі права захищені
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
