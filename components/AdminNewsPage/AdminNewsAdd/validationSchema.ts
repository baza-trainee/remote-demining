import { object, string } from "yup";

const supportedFormats = ["pdf", "jpeg", "png", "jpg", "webp"];

const validationSchema = object().shape({
  image: string()
    .test("fileFormat", "Invalid format", (value) => {
      if (!value) return true; // Allow empty value
      const format = value.split(";")[0].split("/")[1];
      return supportedFormats.includes(format);
    })
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true; // Allow empty value
      const fileSizeInBytes = (value.length * 3) / 4;
      const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB
      return fileSizeInBytes <= maxSizeInBytes;
    }),
  title: string()
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄ\s'-]+$/, "Невалідні символи")
    .min(3, "Заголовок має містити мінімум 8 символів")
    .max(300, "Заголовок має містити максимум 8 символів"),
});

export default validationSchema;
