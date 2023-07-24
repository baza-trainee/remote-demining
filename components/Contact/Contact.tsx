import { FC } from 'react';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import styles from './Contact.module.css';
import SectionContainer from '../SectionContainer/SectionContainer';
import bgContainer from '@/public/images/contact/bg.jpg';

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <SectionContainer bgImg={bgContainer.src} className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Якщо у вас є питання, зауваження або пропозиції , просимо заповнити
            форму зворотнього зв`язку
          </h2>
          <ContactForm />
        </div>
      </Container>
    </SectionContainer>
  );
};

export default Contact;
