"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";
import * as yup from "yup";
import axios from "axios";

import AutorizationInput from "@/components/AutorizationInput/AutorizationInput";
import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";

import styles from "./SandMail.module.css";

interface SandMailValues {
  email: string;
}

const validationScheme = yup.object({
  email: yup
    .string()
    .email("Помилка валідації")
    .required("Це поле не повинно бути пустим"),
});

const SandMail = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
    setError,
  } = useForm<SandMailValues>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(validationScheme),
  });

  const sendEmail: SubmitHandler<SandMailValues> = async (data) => {
    try {
      await axios.post(
        "https://remote-demining.onrender.com/auth/forgot-password",
        { email: data.email }
      );
      toggleModal();
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setError("email", { type: "custom", message: "Помилка валідації"});
        }
        if (error.response?.status === 500) {
          setError("email", { type: "custom", message: "Упс... щось пішло не так"});
        }
      }
      console.log(error);
    }
  };

  return (
    <>
      <form
        id="send-mail"
        className={styles.container}
        onSubmit={handleSubmit(sendEmail)}
      >
        <p className={styles.text}>
          Для відновлення паролю введіть Вашу електронну адресу. Вам надійде
          лист із посиланням для зміни паролю
        </p>
        <div className={styles.input_container}>
          <AutorizationInput
            {...register("email")}
            type="email"
            label="Email"
            errorMessage={errors.email?.message}
            error={errors.email}
          ></AutorizationInput>
        </div>
        <Button isFullWidth type="submit" disabled={!dirtyFields.email}>
          Надіслати
        </Button>
      </form>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
          <ConfirmationModal message="Перейдіть за посиланням, відправленим у листі на Вашу пошту" />
        </Modal>
      )}
    </>
  );
};

export default SandMail;
