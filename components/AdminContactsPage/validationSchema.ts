import { object, string } from "yup";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const phoneRegex = /^\+38 \(\d{3}\) \d{3} \d{4}$/;

const validationSchema = object().shape({
  email: string()
    .trim()
    .required("Введіть e-mail")
    .matches(emailRegex, "Невалідний формат пошти")
    .email("Невалідний формат пошти")
    .test(
      "is-valid-domain",
      "E-mail з доменом .ru не підтримується",
      (value) => {
        if (value && value.includes("@")) {
          const domain = value.split("@")[1];
          return !domain.toLowerCase().endsWith(".ru");
        }
      }
    ),
  phone: string()
    .trim()
    .required("Телефон є обов'язковим полем")
    .matches(phoneRegex, "Введіть номер телефону у форматі +38 (067) 333 4444"),
});

export default validationSchema;
