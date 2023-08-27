import { object, string } from "yup";

const monthNames = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];

const validationSchema = object().shape({
  image: string()
    .test("fileSize", "Файл повинен бути менше 2MB", (value) => {
      if (!value) return true; // Allow empty value
      const fileSizeInBytes = (value.length * 3) / 4;
      const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB
      return fileSizeInBytes <= maxSizeInBytes;
    })
    .required(`Обов'язковe поле`),
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
    .required(`Обов'язковe поле`)
    .matches(
      /^(http|https):\/\//,
      "Посилання повинно починатися з http:// або https://"
    ),
  date: string()
    .test(
      "valid-date",
      "Введіть дату у форматі 'ДД місяць рік', наприклад 12 травня 2023",
      (value) => {
        if (!value) return true;

        const dateParts = value.split(" ");
        if (dateParts.length !== 3) {
          return false;
        }

        const day = parseInt(dateParts[0], 10);
        const month = monthNames.indexOf(dateParts[1]);
        const year = parseInt(dateParts[2], 10);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
          return false;
        }

        // Validate the day, month, and year ranges
        if (day < 1 || day > 31 || month === -1 || year < 2000) {
          return false;
        }

        return true;
      }
    )
    .required("Обов'язкове поле"),
});

export default validationSchema;
