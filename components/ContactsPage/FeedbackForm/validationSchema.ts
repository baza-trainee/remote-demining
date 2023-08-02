import { object, string } from "yup";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const validationSchema = object().shape({
  name: string()
    .required("Введіть ім’я")
    .min(2, "Ім’я повинно бути не менше 2 знаків")
    .max(50, "Ім’я повинно бути не більше 50 знаків"),
  email: string()
    .required("Введіть email")
    .matches(emailRegex, "Введіть дійсний email")
    .test(
      "is-valid-domain",
      "Email з доменом .ru не підтримується",
      (value) => {
        if (value && value.length >= 3) {
          const domain = value.split("@")[1];
          return !domain.endsWith(".ru");
        }
      }
    ),
  comment: string()
    .required("Поле є обов'язковим")
    .max(300, "Просимо скоротити ваше повідомлення до 300 знаків"),
  phone: string()
    .required("Телефон є обов'язковим полем")
    .matches(phoneRegex, "Введіть дійсний номер телефону"),
});

export default validationSchema;
