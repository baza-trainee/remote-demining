"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useWindowSize } from "usehooks-ts";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";

import validationSchema from "./validationSchema";

import styles from "./FeedbackForm.module.css";

interface FeedbackFormValues {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

const FeedbackForm: FC = () => {
  const { width } = useWindowSize();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FeedbackFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FeedbackFormValues) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Зворотній зв`язок</h2>
      <p className={styles.text}>
        Ваш відгук чи пропозиція буде корисною для нас. <br /> Дякуємо що ви з
        нами.
      </p>
      <form
        id="feedback-form"
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          size="full"
          type="text"
          label="Ім’я*"
          backgroundCl="secondary"
          errorMessage={errors.name?.message}
          error={errors.name}
          {...register("name")}
        />
        {width >= 320 && width < 768 ? (
          <div>
            <Input
              className={styles.fullPhoneInput}
              size="full"
              type="tel"
              label="Телефон*"
              backgroundCl="secondary"
              error={errors.phone}
              errorMessage={errors.phone?.message}
              {...register("phone")}
            />
            <Input
              size="full"
              type="email"
              label="Email*"
              backgroundCl="secondary"
              errorMessage={errors.email?.message}
              error={errors.email}
              {...register("email")}
            />
          </div>
        ) : (
          <div className={styles.inputWrapper}>
            <Input
              size="small"
              type="tel"
              label="Телефон*"
              backgroundCl="secondary"
              error={errors.phone}
              errorMessage={errors.phone?.message}
              {...register("phone")}
            />
            <Input
              size="small"
              type="email"
              label="Email*"
              backgroundCl="secondary"
              errorMessage={errors.email?.message}
              error={errors.email}
              {...register("email")}
            />
          </div>
        )}
        <TextArea
          label="Повідомлення*"
          size="full"
          backgroundCl="secondary"
          height={146}
          error={errors.comment}
          errorMessage={errors.comment?.message}
          {...register("comment")}
        />
        <Button type="submit" isFullWidth disabled={isSubmitting}>
          Надіслати
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
