import { object, string } from "yup";

const validationSchema = object().shape({
  login: string().required("Введіть логін"),
  password: string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .required("Введіть пароль"),
});

export default validationSchema;
