import { object, string } from "yup";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const phoneRegex =
  /^([\+]?[(]?[0-9]{2,4}[)]?[-\s\.]?[0-9]{2,4}[-\s\.]?[0-9]{2,4}[-\s\.]?[0-9]{2,4})$|^\+38 \(\d{3}\) \d{3} \d{4}$/;

const validationSchema = object().shape({
  email: string()
    .required("Введіть email")
    .matches(emailRegex, "Невалідний формат пошти")
    .test(
      "is-valid-domain",
      "Email з доменом .ru не підтримується",
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
