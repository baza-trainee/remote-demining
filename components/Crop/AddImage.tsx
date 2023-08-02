'use client';
import Image from 'next/image';
import { FC, useCallback, useEffect, useState } from 'react';
import Cropper from 'react-easy-crop';
import { Area, Point } from 'react-easy-crop/types';

import Button from '@/components/Button/Button';
import addImg from '@/public/images/admin/add.svg';

import { getCroppedImg } from './utils/getCroppedImg';

import styles from './AddImage.module.css';

interface AddImageProps {
  imgWidth: number;
  imgHeight: number;
  title: string;
}

const AddImage: FC<AddImageProps> = ({
  imgWidth = 432,
  imgHeight = 240,
  title = 'Додати зображення',
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imgSrc, setImgSrc] = useState('');
  const [isDragActive, setIsDragActive] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = () => {
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      setImgSrc(URL.createObjectURL(files[0]));
    }
  };

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const zoomValue = parseFloat(e.target.value);
    setZoom(zoomValue);
  };

  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setImgSrc('');
        setCroppedImage(null);
      }
    },
    [setImgSrc, setCroppedImage]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleEscKey]);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imgSrc, croppedAreaPixels!);
      setCroppedImage(croppedImage as string);
      setImgSrc('');
    } catch (e) {
      console.error(e);
    }
  }, [imgSrc, croppedAreaPixels]);

  return (
    <>
      <label
        className={`${styles.wrapper} ${isDragActive ? styles.dragActive : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        htmlFor="images"
      >
        <input
          className={styles.input}
          accept=".jpg, .webP, .png, .svg"
          placeholder="img"
          onChange={handleChange}
          type="file"
          id="images"
        />
        <div>
          <Image
            className={styles.icon}
            src={addImg.src}
            width={24}
            height={24}
            alt="add icon"
          />
          <span className={styles.title}>{title}</span>
        </div>
      </label>
      {imgSrc && (
        <>
          <div className={styles.inner}>
            <Cropper
              classes={{ containerClassName: styles.cropContainer }}
              image={imgSrc}
              crop={crop}
              zoom={zoom}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropSize={{ width: imgWidth, height: imgHeight }}
            />
          </div>
          <div className={styles.controls}>
            <span>Приблизити</span>
            <input
              value={zoom}
              type="range"
              min={1}
              max={3}
              step={0.1}
              onChange={handleZoomChange}
            />
            <Button onClick={showCroppedImage}>Обрізати</Button>
          </div>
        </>
      )}
    </>
  );
};

export default AddImage;
