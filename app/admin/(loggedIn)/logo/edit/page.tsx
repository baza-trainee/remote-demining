'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToggle } from 'usehooks-ts';
import * as yup from 'yup';
import { object } from 'yup';

import AdminEditContactsInput from '@/components/AdminEditContactsForm/AdminEditContactsInput';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { CrumbItem } from '@/components/Breadcrumb/Breadcrumb';
import Button from '@/components/Button/Button';
import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal';
import AddImage from '@/components/Crop/AddImage';
import Modal from '@/components/Modal/Modal';
import api from '@/lib/api/baseQuery';

import styles from './page.module.css';

interface LogosFormValues {
  description: string;
}

const Page: FC = ({}) => {
  const [image, setImage] = useState<string | null>('');
  const [isModalOpen, toggleModal] = useToggle(false);

  const items: CrumbItem[] = [
    { label: 'Лого партнерів', path: '/admin/logo' },
    { label: 'Додати лого', path: '/admin/logo/edit' },
  ];
  const validationSchema = object().shape({
    description: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LogosFormValues>({
    defaultValues: {
      description: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const closeModal = () => {
    toggleModal();
  };

  const onSubmit = async (values: LogosFormValues) => {
    try {
      const { description } = values;
      await api.post('/content', {
        images: image,
        data: {
          section: 'logosImg',
          img_description: description,
        },
        dataSchema: {
          section: 'string',
          img_description: 'string',
        },
      });
      reset();
      toggleModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Breadcrumb items={items} />
      <div className={styles.wrapper}>
        <form
          className={styles.form}
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <AddImage
            setImage={setImage}
            title="Додати лого"
            imgWidth={213}
            imgHeight={140}
          />
          <AdminEditContactsInput
            placeholder="Опис зображення"
            type="text"
            editable={false}
            error={errors.description}
            {...register('description')}
          />
          <Button width="291" height="64" type="submit" disabled={isSubmitting}>
            Надіслати
          </Button>
        </form>
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={closeModal}>
          <ConfirmationModal message={'Лого успішно додано '} />
        </Modal>
      )}
    </div>
  );
};

export default Page;
