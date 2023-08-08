import { object, string } from "yup";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const validationSchema = object().shape({
  email: string()
    .required("Введіть email")
    .matches(emailRegex, "Введіть дійсний email")
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
    .matches(phoneRegex, "Введіть дійсний номер телефону"),
});

export default validationSchema;
