"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AutorizationInput from "../AutorizationInput/AutorizationInput";
import Button from "../Button/Button";

import styles from "./PasswordRecover.module.css";

interface PasswordRecoverValues {
  email: string;
}

const validationScheme = yup.object({
  email: yup.string().email().required(),
});

const PasswordRecover = () => {
  const { register, handleSubmit } = useForm<PasswordRecoverValues>({
    defaultValues: {
      email: "",
    },
    // resolver: yupResolver(validationScheme)
  });

  const sendEmail: SubmitHandler<PasswordRecoverValues> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.wrapper}>
      <form
        id="recover-password"
        className={styles.container}
        onSubmit={handleSubmit(sendEmail)}
      >
        <h2 className={styles.title}>Відновити пароль</h2>
        <p className={styles.text}>
          Для відновлення паролю введіть Вашу електронну адресу. Вам надійде
          лист із посиланням для зміни паролю
        </p>
        <div className={styles.input_container}>
          <AutorizationInput
            {...register("email")}
            type="email"
            label="Email"
          ></AutorizationInput>
        </div>
        <Button isFullWidth>
          Надіслати
        </Button>
      </form>
    </div>
  );
};

export default PasswordRecover;
