'use client';
import Image from 'next/image';
import { FC } from 'react';

import Button from '@/components/Button/Button';

import styles from './Logo.module.css';

interface LogoProps {
  img: string[];
  description: string;
  toggleModal: () => void;
  id: string;
  setImageId: any;
}

const Logo: FC<LogoProps> = ({
  img,
  description,
  toggleModal,
  id,
  setImageId,
}) => {
  const handleClick = () => {
    setImageId(id);
    toggleModal();
  };

  return (
    <div className={styles.wrapper}>
      <Image
        width={173}
        height={133}
        src={`https://remote-demining.onrender.com/images/${img}`}
        alt={description}
      />
      <Button
        width="173"
        height="40"
        type="submit"
        outlined
        onClick={handleClick}
      >
        Видалити
      </Button>
    </div>
  );
};

export default Logo;
