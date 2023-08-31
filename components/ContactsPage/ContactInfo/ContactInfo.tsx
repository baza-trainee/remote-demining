"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { ContactsFormValues } from "@/components/AdminContactsPage/AdminContactsPage";
import { getContacts } from "@/lib/admin/content";
import BG from "@/public/images/contact/bg.jpg";
import email from "@/public/images/icons/contacts/email.svg";
import map from "@/public/images/icons/contacts/map.svg";
import phone from "@/public/images/icons/contacts/phone.svg";

import data from "./data";

import styles from "./ContactInfo.module.css";

const ContactInfo: FC = () => {
  const [contactData, setContactData] = useState<ContactsFormValues>({
    id: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchContactData();
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

  return (
    <div className={styles.wrapper}>
      <Image
        src={BG}
        className={styles.img}
        alt="A drone flying over mountains"
        fill
      />
      <div className={styles.content}>
        <h2 className={styles.heading}>Контактні дані</h2>
        <ul className={styles.infoWrapper}>
          <li>
            <h3 className={styles.subheading}>Наше розташування</h3>
            <div className={styles.infoItem}>
              <Image src={map} alt="" width={28} height={28} />
              <p className={styles.infoText}>
                вул. Олеся Гончара, 55-б, Київ, Україна 01601
              </p>
            </div>
          </li>
          <li>
            <h3 className={styles.subheading}>Телефонуйте нам</h3>
            <div className={styles.infoItem}>
              <Image src={phone} alt="" width={28} height={28} />
              <p className={styles.infoText}>
                {contactData ? contactData.phone : data[1].text}
              </p>
            </div>
          </li>
          <li>
            <h3 className={styles.subheading}>Напишіть нам</h3>
            <div className={styles.infoItem}>
              <Image src={email} alt="" width={28} height={28} />
              <p className={`${styles.infoText} ${styles.emailText}`}>
                {contactData ? contactData?.email : data[2].text}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
