import { number, object, string } from "yup";

const validationSchema = object().shape({
  paymentAmount: number()
    .typeError("Вкажіть будь-ласка суму")
    .required("Вкажіть будь-ласка суму")
    .min(1, "Сумма повинна бути більше 0")
    .max(14999, "Максимальна сумма платежу 14999"),
  paymentSystems: string().required("Будь-ласка виберіть спосіб оплати"),
});

export default validationSchema;
