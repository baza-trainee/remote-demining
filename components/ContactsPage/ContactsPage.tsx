import Container from "../Container/Container";

import ContactInfo from "./ContactInfo/ContactInfo";
import FeedbackForm from "./FeedbackForm/FeedbackForm";

import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <section className={styles.sectionWrapper}>
      <Container>
        <div className={styles.box}>
          <FeedbackForm />
          <ContactInfo />
        </div>
      </Container>
    </section>
  );
};

export default ContactsPage;
