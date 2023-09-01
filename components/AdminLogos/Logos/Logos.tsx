'use client';

import { FC, useEffect, useState } from 'react';
import { useToggle } from 'usehooks-ts';

import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal';
import Modal from '@/components/Modal/Modal';
import { getLogos, LogosInDTO } from '@/lib/admin/content';
import api from '@/lib/api/baseQuery';

import AddLogo from '../AddLogo/AddLogo';
import Logo from '../Logo/Logo';

import styles from './Logos.module.css';

const Logos: FC = ({}) => {
  const [imgs, setImgs] = useState<LogosInDTO[]>([]);
  const [isModalOpen, toggleModal] = useToggle(false);
  const [deletionCount, setDeletionCount] = useState(0);
  const [imageId, setImageId] = useState('');

  const handleDelete = async () => {
    try {
      await api.delete(`/content/${imageId}`);
      setDeletionCount((prevCount) => prevCount + 1);
      toggleModal();
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async () => {
    const logos = await getLogos();
    setImgs(logos);
  };

  useEffect(() => {
    getData();
  }, [deletionCount]);

  const closeModal = () => {
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logos}>
        {imgs?.map((el) => (
          <Logo
            setImageId={setImageId}
            key={el._id}
            id={el._id}
            img={el.images}
            description={el.data.img_description}
            toggleModal={toggleModal}
          />
        ))}
        <AddLogo />
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} toggleModal={closeModal}>
          <ConfirmationModal
            approveChanges={handleDelete}
            discardChanges={handleCancel}
            message="Ви дійсно бажаєте видалити лого? "
          />
        </Modal>
      )}
    </div>
  );
};

export default Logos;
