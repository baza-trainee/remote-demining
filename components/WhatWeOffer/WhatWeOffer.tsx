import Image from 'next/image';
import { FC } from 'react';

import ground from '@/public/images/what-we-offer/ground.jpg';

import SectionContainer from '../SectionContainer/SectionContainer';

import { data } from './consts';

import styles from './WhatWeOffer.module.css';

const WhatWeOffer: FC = () => {
  return (
    <SectionContainer title="Що ми пропонуємо" centerTitle>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <Image className={styles.img} src={ground.src} alt="drone and ground" fill />
          <div className={styles.info}>
            <p className={styles.infoText}>
              Технологія успішно пройшла попередні польові випробування!
            </p>
          </div>
        </div>
        <ul className={styles.list}>
          {data.map((text) => (
            <li className={styles.listItem} key={text.id}>
              {text.text}
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default WhatWeOffer;
