import Image from "next/image";

import BG from "@/public/images/contact/bg.jpg";

import data from "./data";

import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
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
          {data.map(({ id, subheading, icon, text }) => (
            <li key={id}>
              <h3 className={styles.subheading}>{subheading}</h3>
              <div className={styles.infoItem}>
                <Image src={icon} alt="" width={28} height={28} />
                <p
                  className={`${styles.infoText} ${
                    text.includes("@") && styles.emailText
                  }`}
                >
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
