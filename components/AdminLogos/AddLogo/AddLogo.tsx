import { FC } from 'react';
import styles from './AddLogo.module.css';

import addImage from '@/public/images/icons/buttons/add.svg';
import Link from 'next/link';
import Image from 'next/image';

interface AddLogoProps {}

const AddLogo: FC<AddLogoProps> = ({}) => {
  return (
    <Link href="/admin/logo/edit">
      <div className={styles.wrapper}>
        <Image
          width={173}
          height={173}
          src={addImage.src}
          alt="add logo"
          className={styles.img}
        />
      </div>
    </Link>
  );
};

export default AddLogo;
