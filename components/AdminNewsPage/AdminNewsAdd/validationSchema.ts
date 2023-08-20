import { object, string } from "yup";

const supportedFormats = ["pdf", "jpeg", "png", "jpg", "webp"];

const validationSchema = object().shape({
  image: string().test("fileSize", "Файл повинен бути менше 2MB", (value) => {
    if (!value) return true; // Allow empty value
    const fileSizeInBytes = (value.length * 3) / 4;
    const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB
    return fileSizeInBytes <= maxSizeInBytes;
  }),
  title: string()
    // .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄ\s'-]+$/, "Невалідні символи")
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300"),
  img_description: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300"),
  text: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300"),
  link: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300"),
  date: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300"),
});

export default validationSchema;
