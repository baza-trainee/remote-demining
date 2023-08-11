import { object, string } from "yup";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const phoneRegex = /^\+38 \(\d{3}\) \d{3} \d{4}$/;

const validationSchema = object().shape({
  email: string()
    .required("Введіть e-mail")
    .matches(emailRegex, "Невалідний формат пошти")
    .test(
      "is-valid-domain",
      "E-mail з доменом .ru не підтримується",
      (value) => {
        if (value && value.includes("@")) {
          const domain = value.split("@")[1];
          return !domain.endsWith(".ru");
        }
      }
    ),
  phone: string()
    .required("Телефон є обов'язковим полем")
    .matches(phoneRegex, "Невалідний формат"),
});

export default validationSchema;
