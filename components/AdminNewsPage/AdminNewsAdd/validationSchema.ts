import { object, string } from "yup";

const validationSchema = object().shape({
  image: string()
    .test("fileSize", "Файл повинен бути менше 2MB", (value) => {
      if (!value) return true; // Allow empty value
      const fileSizeInBytes = (value.length * 3) / 4;
      const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB
      return fileSizeInBytes <= maxSizeInBytes;
    })
    .required(),
  title: string()
    // .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄ\s'-]+$/, "Невалідні символи")
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required(`Обов'язковe поле`),
  img_description: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required(`Обов'язковe поле`),
  text: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required(`Обов'язковe поле`),
  link: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required(`Обов'язковe поле`),
  date: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required(`Обов'язковe поле`),
});

export default validationSchema;
