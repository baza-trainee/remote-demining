import { object, string } from "yup";

const validationSchema = object().shape({
  img: string().required("Помилка валідації"),
  title: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required("Помилка валідації"),
  text: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required("Помилка валідації"),
  img_description: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required("Помилка валідації"),
});

export default validationSchema;
