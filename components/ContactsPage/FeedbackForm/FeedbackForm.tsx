import styles from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  return (
    <div>
      <h2 className={styles.heading}>Зворотній зв`язок</h2>
      <p className={styles.text}>
        Ваш відгук чи пропозиція буде корисною для нас. Дякуємо що ви з нами.
      </p>
      <form id="contact-form" className={styles.form}></form>
    </div>
  );
};

export default FeedbackForm;
