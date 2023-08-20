import { object, string } from "yup";

const validationSchema = object().shape({
  img: string()
    .required("Помилка валідації")
    .test("fileSize", "Файл повинен бути менше 2MB", (value) => {
      if (!value) return true; // Allow empty value
      const fileSizeInBytes = (value.length * 3) / 4;
      const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB
      return fileSizeInBytes <= maxSizeInBytes;
    }),
  title: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required("Помилка валідації"),
  text: string()
    .min(3, "Кількість символів має бути більше 3")
    .max(300, "Кількість символів має бути менше 300")
    .required("Помилка валідації"),
  img_description: string().required("Помилка валідації"),
});

export default validationSchema;
