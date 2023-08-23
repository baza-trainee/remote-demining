import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

import Button from '@/components/Button/Button';
import closeIcons from '@/public/images/socrat/Open-Question.svg';

import styles from './ImagePreview.module.css';

interface ImagePreviewProps {
  img: string | null;
  setCroppedImage: Dispatch<SetStateAction<string | null>>;
  setImgSrc: Dispatch<SetStateAction<string>>;
}

const ImagePreview: FC<ImagePreviewProps> = ({
  img,
  setCroppedImage,
  setImgSrc,
}) => {
  const handleClose = () => {
    setCroppedImage(null);
  };

  const handleAccept = () => {
    setImgSrc('');
    setCroppedImage(null);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.closeBar}>
        <Image
          className={styles.img}
          width={40}
          height={40}
          src={closeIcons}
          onClick={handleClose}
          alt="close icon"
        />
      </div>
      <Image width={300} height={300} alt="preview photo" src={img || ''} />
      <div>
        <Button type="button" onClick={handleAccept}>
          Підтвердити
        </Button>
      </div>
    </div>
  );
};

export default ImagePreview;
