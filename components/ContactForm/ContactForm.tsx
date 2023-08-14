'use client';

import { FC, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToggle } from 'usehooks-ts';
import * as yup from 'yup';

import Input from '@/components/Input/Input';

import Button from '../Button/Button';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import validationSchema from '../ContactsPage/FeedbackForm/validationSchema';
import Modal from '../Modal/Modal';
import TextArea from '../TextArea/TextArea';

import styles from './ContactForm.module.css';

interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

const ContactForm: FC = ({}) => {
  const [isModalOpen, toggleModal] = useToggle(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      comment: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const sendEmail = () => {
    try {
      emailjs.sendForm(
        process.env.SERVICE_ID!,
        process.env.TEMPLATE_ID!,
        '#contact-form',
        process.env.PUBLIC_KEY!
      );
      toggleModal();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    toggleModal();
  };

  return (
    <div className={styles.wrapper}>
      <form
        id="contact-form"
        className={styles.form}
        onSubmit={handleSubmit(sendEmail)}
        noValidate
      >
        <Input
          size="full"
          type="name"
          label="Ім’я"
          errorMessage={errors.name?.message}
          error={errors.name}
          {...register('name')}
        />
        <Input
          size="full"
          type="tel"
          label="Телефон"
          errorMessage={errors.phone?.message}
          error={errors.phone}
          {...register('phone')}
        />
        <Input
          {...register('email')}
          size="full"
          type="email"
          error={errors.email}
          errorMessage={errors.email?.message}
          label="E-mail"
        />
        <TextArea
          {...register('comment')}
          label="Повідомлення"
          size="full"
          error={errors.comment}
          errorMessage={errors.comment?.message}
        />
        <Button type="submit" disabled={isSubmitting} isFullWidth>
          Надіслати
        </Button>
      </form>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={closeModal}>
          <ConfirmationModal message="Повідомлення успішно відправлено" />
        </Modal>
      )}
    </div>
  );
};

export default ContactForm;
