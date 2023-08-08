import { object, ref, string } from "yup";

const validationSchema = object().shape({
  oldPassword: string()
    .min(14, "Пароль має містити мінімум 14 символів")
    .required("Введіть старий пароль"),
  newPassword: string()
    .min(14, "Пароль має містити мінімум 14 символів")
    .required("Введіть новий пароль"),
  confirmPassword: string()
    .oneOf([ref("newPassword"), undefined], "Паролі не співпадають")
    .required("Підтвердіть новий пароль"),
});

export default validationSchema;
