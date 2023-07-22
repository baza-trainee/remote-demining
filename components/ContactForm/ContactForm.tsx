'use client';

import { FC } from 'react';
import Input from '@/components/Input/Input';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import TextArea from '../TextArea/TextArea';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

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

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
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

  const sendEmail = () => {
    try {
      emailjs.sendForm(
        'service_7ll2pvb',
        'template_2j1mjx4',
        '#contact-form',
        'vpKbRCkkOvFZKJUoA'
      );
      reset();
    } catch (error) {
      console.log(error);
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
      <Button type="submit" disabled={isSubmitting} formBtn isFullWidth>
        Надіслати
      </Button>
    </form>
  );
};

export default ContactForm;
