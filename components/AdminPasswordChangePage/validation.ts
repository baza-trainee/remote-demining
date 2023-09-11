import { object, ref, string } from "yup";

const validationSchema = object().shape({
  password: string()
    .trim()
    .min(8, "Пароль має містити мінімум 8 символів")
    .max(14, "Пароль має містити максимум 14 символів")
    .required("Введіть новий пароль"),
  confirmPassword: string()
    .trim()
    .oneOf([ref("password")], "Паролі не співпадають")
    .required("Підтвердіть новий пароль"),
});

export default validationSchema;
