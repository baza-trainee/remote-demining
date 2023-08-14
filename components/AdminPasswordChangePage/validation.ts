import { object, ref, string } from "yup";

const validationSchema = object().shape({
  oldPassword: string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .max(14, "Пароль має містити максимум 14 символів")
    .required("Введіть старий пароль"),
  password: string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .max(14, "Пароль має містити максимум 14 символів")
    .required("Введіть новий пароль"),
  confirmPassword: string()
    .oneOf([ref("password")], "Паролі не співпадають")
    .required("Підтвердіть новий пароль"),
});

export default validationSchema;
