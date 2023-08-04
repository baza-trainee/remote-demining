import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "usehooks-ts";
import * as yup from "yup";

import AutorizationInput from "@/components/AutorizationInput/AutorizationInput";
import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import Modal from "@/components/Modal/Modal";

import styles from "./PasswordReset.module.css";

interface PasswordResetValues {
  password: string;
  confirmPassword: string;
}

const validationScheme = yup.object({
  password: yup
    .string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .max(14, "Пароль має містити максимум 14 символів")
    .required("Це поле не повинно бути пустим"),
  confirmPassword: yup
    .string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .max(14, "Пароль має містити максимум 14 символів")
    .oneOf([yup.ref("password")], "Паролі не співпадають")
    .required("Це поле не повинно бути пустим"),
});

const PasswordReset = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted, dirtyFields },
    reset,
  } = useForm<PasswordResetValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(validationScheme),
  });

  const sendPassword: SubmitHandler<PasswordResetValues> = (data) => {
    try {
      console.log(data);
      toggleModal();
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        id="password-reset"
        className={styles.container}
        onSubmit={handleSubmit(sendPassword)}
      >
        <div className={styles.input_container}>
          <AutorizationInput
            {...register("password")}
            type="password"
            label="Введіть новий пароль*"
            errorMessage={errors.password?.message}
            error={errors.password}
          ></AutorizationInput>
          <AutorizationInput
            {...register("confirmPassword")}
            type="password"
            label="Підтвердіть новий пароль*"
            errorMessage={errors.password?.message}
            error={errors.password}
          ></AutorizationInput>
        </div>
        <Button
          isFullWidth
          type="submit"
          disabled={!dirtyFields.password && !dirtyFields.confirmPassword}
        >
          Підтвердити
        </Button>
      </form>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
          <ConfirmationModal message="Пароль успішно змінено" />
        </Modal>
      )}
    </>
  );
};

export default PasswordReset;
