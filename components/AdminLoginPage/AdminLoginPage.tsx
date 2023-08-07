"use client";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import AutorizationInput from "../AutorizationInput/AutorizationInput";
import Button from "../Button/Button";
import PasswordInputToggle from "../PasswordInputToggle/PasswordInputToggle";

import validationSchema from "./validationSchema";

import styles from "./AdminLoginPage.module.css";

interface LoginFormValues {
  login: string;
  password: string;
}

const AdminLoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset,
  } = useForm<LoginFormValues>({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    try {
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.section}>
      <AdminWrapper size="smallWrapper" classname={styles.wrapper}>
        <h3 className={styles.heading}>Вхід</h3>
        <form
          className={styles.form}
          id="login-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.inputWrapper}>
            <AutorizationInput
              label="Логін"
              type="text"
              placeholder="Введіть логін"
              errorMessage={errors.login?.message}
              error={errors.login}
              {...register("login")}
            />
            <PasswordInputToggle
              errorMessage={errors.password?.message}
              error={errors.password}
              {...register("password")}
            />
          </div>
          <Link href={"/admin/recover-password"} className={styles.link}>
            Забули пароль?
          </Link>
          <Button isFullWidth type="submit">
            Вхід
          </Button>
        </form>
      </AdminWrapper>
    </section>
  );
};

export default AdminLoginPage;
