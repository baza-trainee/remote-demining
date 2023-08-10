import { object, ref, string } from "yup";

const validationSchema = object().shape({
  oldPassword: string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .required("Введіть старий пароль"),
  newPassword: string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .required("Введіть новий пароль"),
  confirmPassword: string()
    .oneOf([ref("newPassword")], "Паролі не співпадають")
    .required("Підтвердіть новий пароль"),
});

export default validationSchema;
