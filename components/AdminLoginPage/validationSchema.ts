import { object, string } from "yup";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
  password: string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .required("Введіть пароль"),
});

export default validationSchema;
