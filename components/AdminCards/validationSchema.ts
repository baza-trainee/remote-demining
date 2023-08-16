import { object, string } from "yup";

const validationSchema = object().shape({
  img: string().required("Помилка валідації"),
  title: string().required("Помилка валідації"),
  text: string().required("Помилка валідації"),
  img_description: string().required("Помилка валідації"),
});

export default validationSchema;
