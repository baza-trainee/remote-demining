import { object, string } from "yup";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validationSchema = object().shape({
  login: string()
    .trim()
    .required("Введіть логін")
    .matches(emailRegex, "Введіть дійсний логін"),
  password: string()
    .trim()
    .min(8, "Пароль має містити мінімум 8 символів")
    .max(14, "Пароль має містити максимум 14 символів")
    .required("Введіть пароль"),
});

export default validationSchema;
