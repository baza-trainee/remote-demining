'use client';

import Image from 'next/image';
import { FC } from 'react';

import Button from '@/components/Button/Button';
import { useMyMedia } from '@/hooks/useMedia';

import { HeroData } from '../heroData';

import styles from './HeroSlide.module.css';

const HeroSlide: FC<{ item: HeroData }> = ({ item }) => {
  const { isTablet } = useMyMedia();

  return (
    <div>
      <div
        className={styles['slide']}
        style={{
          background: `lightgray url(${item.backgroundImage}) left / cover`,
        }}
      >
        <h2 className={styles['title']}>{item.title}</h2>
        <p className={styles['caption']}>{item.caption}</p>
        <Button className={styles.slideBtn} isFullWidth={isTablet}>
          Підтримати
        </Button>
        {item.contentImage && (
          <Image
            src={item.contentImage}
            alt={item.title}
            className={styles['contentImage']}
            width={0}
            height={0}
          />
        )}
      </div>
    </div>
  );
};

export default HeroSlide;
