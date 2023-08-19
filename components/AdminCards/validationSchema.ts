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
  title: string().required("Помилка валідації"),
  text: string().required("Помилка валідації"),
  img_description: string().required("Помилка валідації"),
});

export default validationSchema;
