'use client';

import { FC, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '@/components/Input/Input';

import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';

import styles from './ContactForm.module.css';

interface ContactFormValues {
  email: string;
  name: string;
  tel: string | undefined;
  message: string | undefined;
}

const validationScheme = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  tel: yup.string(),
  message: yup.string().min(3),
});

const ContactForm: FC = ({}) => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  useEffect(() => {
    if (captchaValue) {
      handleSubmit(sendEmail)();
    }
  }, [captchaValue]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      email: '',
      name: '',
      tel: '',
      message: '',
    },
    resolver: yupResolver(validationScheme),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const sendEmail = async (formData: ContactFormValues) => {
    if (captchaValue) {
      const params = {
        ...formData,
        'g-recaptcha-response': captchaValue,
      };

      try {
        await emailjs.send(
          process.env.SERVICE_ID!,
          process.env.TEMPLATE_ID!,
          params,
          process.env.PUBLIC_KEY!
        );
        reset();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('ReCAPTCHA validation failed.');
    }
  };
  return (
    <form
      id="contact-form"
      className={styles.wrapper}
      onSubmit={handleSubmit(sendEmail)}
      noValidate
    >
      <Input
        size="full"
        type="email"
        label={`Ваш е-mail`}
        error={errors.email}
        errorMessage="Введіть e-mai"
        {...register('email')}
      />
      <Input
        size="full"
        type="tel"
        label="Ваш номер телефону"
        {...register('tel')}
      />
      <Input
        {...register('name')}
        size="full"
        type="name"
        error={errors.name}
        errorMessage="Введіть ім’я"
        label="Ваше ім’я"
      />
      <TextArea {...register('message')} label="Повідомлення" size="full" />
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={`${process.env.RECAPTCHA_SITE}`}
        size="invisible"
        onChange={handleCaptchaChange}
      />
      <Button
        onClick={() => recaptchaRef.current?.execute()}
        type="submit"
        disabled={isSubmitting}
        formBtn
        isFullWidth
      >
        Надіслати
      </Button>
    </form>
  );
};

export default ContactForm;
