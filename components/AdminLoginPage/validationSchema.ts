import { object, string } from "yup";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validationSchema = object().shape({
  login: string()
    .required("Введіть логін")
    .matches(emailRegex, "Введіть дійсний логін"),
  password: string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .max(14, "Пароль має містити максимум 14 символів")
    .required("Введіть пароль"),
});

export default validationSchema;
