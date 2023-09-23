"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getContacts, getReports, ReportsInDTO } from "@/lib/admin/content";
import { openReportInNewWindow } from "@/lib/utils/openReportInNewWindow";
import logo from "@/public/images/footer/logo.svg";
import mail from "@/public/images/footer/mail.svg";
import map from "@/public/images/footer/map.svg";
import tel from "@/public/images/footer/tel.svg";

import { ContactsFormValues } from "../AdminContactsPage/AdminContactsPage";
import Container from "../Container/Container";
import NavLink from "../NavLink/NavLink";

import styles from "./Footer.module.css";

const Footer = () => {
  const [contactData, setContactData] = useState<ContactsFormValues>({
    id: "",
    email: "",
    phone: "",
  });
  const [reportData, setReportData] = useState<ReportsInDTO[]>([]);

  const pathname = usePathname();

  useEffect(() => {
    fetchContactData();
    fetchReportsData();
  }, []);

  const fetchContactData = async () => {
    try {
      const data = await getContacts();
      if (data?.length) {
        const firstContact = data[0];
        setContactData({
          id: firstContact._id,
          email: firstContact.data.email,
          phone: firstContact.data.phone,
        });
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const fetchReportsData = async () => {
    try {
      const data = await getReports();
      data && setReportData(data);
    } catch (e) {
      console.error("Error fetching reports:", e);
    }
  };

  return (
    !pathname.includes("admin") && (
      <footer className={styles.footer}>
        <Container>
          <div className={styles.wrapper}>
            <a href={"#top"} className={styles.logo}>
              <Image height={149} width={117} src={logo} alt="logo" />
            </a>
            <ul className={`${styles.menu} ${styles.category}`}>
              <li>
                <NavLink href="/client" scrollUp>
                  Про нас
                </NavLink>
              </li>
              <li>
                <NavLink href="/client/activity" scrollUp>
                  Наукова діяльність
                </NavLink>
              </li>
              <li>
                <NavLink href="/client/socrat" scrollUp>
                  Дистанційне розмінування
                </NavLink>
              </li>
              <li>
                <NavLink href="/client/contacts" scrollUp>
                  Контакти
                </NavLink>
              </li>
            </ul>
            <ul className={`${styles.web__rights} ${styles.category}`}>
              <li>
                <Link
                  target="_blank"
                  href="/files/privacy.pdf#toolbar=0"
                  aria-readonly={true}
                >
                  Політика конфіденційності
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="/files/terms-of-use.pdf#toolbar=0"
                  aria-readonly
                >
                  Правила користування сайтом
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="/files/privacy.pdf#toolbar=0"
                  aria-readonly
                >
                  Статут
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => openReportInNewWindow(reportData[0])}
                >
                  Звітність
                </a>
              </li>
            </ul>
            <ul className={`${styles.contacts} ${styles.category}`}>
              <li className={styles.contacts__item}>
                <Image width={22} height={22} src={tel} alt="tel" />{" "}
                <span>
                  {contactData.phone ? contactData.phone : "+38 (044) 209 5302"}
                </span>
              </li>
              <li className={styles.contacts__item}>
                <Image width={22} height={22} src={mail} alt="mail" />
                <span>
                  {contactData.email ? contactData.email : "2021snp@ukr.net"}
                </span>
              </li>
              <li className={styles.contacts__item}>
                <Image width={22} height={22} src={map} alt="map" />
                <span>вул. Олеся Гончара, 55-б, Київ, Україна 01601</span>
              </li>
            </ul>
          </div>
          <div className={styles.baza}>
            Розробка Baza Trainee Ukraine 2023 <br className={styles.br} />{" "}
            &copy; Всі права захищені
          </div>
        </Container>
      </footer>
    )
  );
};

export default Footer;
