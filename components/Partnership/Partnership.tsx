'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useMyMedia } from '@/hooks/useMedia';
import { getLogos, LogosInDTO } from '@/lib/admin/content';

import SectionContainer from '../SectionContainer/SectionContainer';
import Slider from '../Slider/Slider';

import styles from './Parnership.module.css';

const Partnership = () => {
  const [perPage, setPerPage] = useState<number>(0);
  const [logos, setLogos] = useState<LogosInDTO[]>([]);

  const getData = async () => {
    try {
      const logos = await getLogos();
      setLogos(logos);
    } catch (error) {
      console.error(error);
      toast.error('Упс..., щось пішло не так!', {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const {
    isSMobile,
    isMobile,
    isMMobile,
    isLMobile,
    isMobileLandscape,
    isTablet,
    isMTablet,
    isSDesktop,
    isDesktop,
  } = useMyMedia();
  useEffect(() => {
    isSMobile && setPerPage(1.2);
    isMobile && setPerPage(1.4);
    isMMobile && setPerPage(1.6);
    isLMobile && setPerPage(2);
    isMobileLandscape && setPerPage(2.5);
    isTablet && setPerPage(3);
    isMTablet && setPerPage(3.3);
    isSDesktop && setPerPage(4);
    isDesktop && setPerPage(5.5);
    getData();
  }, [
    isSMobile,
    isMobile,
    isMMobile,
    isLMobile,
    isMobileLandscape,
    isTablet,
    isMTablet,
    isSDesktop,
    isDesktop,
  ]);

  return (
    <SectionContainer
      title="Партнерські організації"
      description="Організації, з якими ми постійно співпрацюємо"
      className={styles.section}
      hasTitleWidth
      titleMargin
    >
      <Slider
        slidesPerPage={perPage}
        slides={logos.map((el) => (
          <div key={el._id}>
            <Image
              src={`https://remote-demining.onrender.com/images/${el.images}`}
              alt={el.data.img_description}
              width={213}
              height={140}
            />
          </div>
        ))}
        infinite={false}
      />
    </SectionContainer>
  );
};

export default Partnership;
