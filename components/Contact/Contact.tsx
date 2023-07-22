import { FC } from 'react';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import styles from './Contact.module.css';

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Якщо у вас є питання, зауваження або пропозиції , просимо заповнити
            форму зворотнього зв`язку
          </h2>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
