import { object, mixed } from "yup";

const reportsValidate = object().shape({
  report: mixed<FileList>()
    .test(
      "fileSize",
      "Розмір файлу має бути максимум 2 Mb",
      (files) =>
        !files || // Check if `files` is defined
        files.length === 0 || // Check if `files` is not an empty list
        Array.from(files).every((file) => file.size <= 2 * 1024 * 1024)
    )
    .test(
      "fileFormat",
      "Формат файлу повинен бути PDF",
      (files) =>
        !files || // Check if `files` is defined
        files.length === 0 || // Check if `files` is not an empty list
        Array.from(files).every((file) => file.type === "application/pdf")
    )
    .required(`Обов'язковe поле`),
});

export default reportsValidate;
