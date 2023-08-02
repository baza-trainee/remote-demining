import { FC } from "react";

import bgContainer from "@/public/images/contact/bg.jpg";

import ContactForm from "../ContactForm/ContactForm";
import SectionContainer from "../SectionContainer/SectionContainer";

import styles from "./Contact.module.css";

interface ContactProps {
  backgroundImage: string;
}

const Contact: FC<ContactProps> = ({backgroundImage}) => {
  return (
    <SectionContainer bgImg={backgroundImage} className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Якщо у вас є питання, зауваження або пропозиції , просимо заповнити
          форму зворотнього зв`язку
        </h2>
        <ContactForm />
      </div>
    </SectionContainer>
  );
};

export default Contact;
