import React, { ComponentProps } from 'react';
import styles from './sectionContainer.module.css';

interface ContainerProps {
  title?: string;
  bgImg?: string;
  titleColor?: string;
  titleWidth?: string;
  children?: React.ReactNode;
  description?: string;
  centerTitle?: boolean;
  className?: ComponentProps<'textarea'>['className']; 
}

const SectionContainer: React.FC<ContainerProps> = ({
  title,
  bgImg,
  titleColor = '#151515',
  titleWidth,
  children,
  description,
  centerTitle = false,
  className, 
}) => {
  const containerStyle = {
    backgroundImage: bgImg ? `url(${bgImg})` : 'none',
  };

  const titleStyle = {
    color: titleColor,
    width: titleWidth,
  };

  const containerClassName = `${styles.container} ${bgImg ? styles.hasBgImg : ''} ${className || ''}`;

  const containerHeaderWrapperClassName = centerTitle
    ? `${styles.containerHeaderWrapper} ${styles.centered}`
    : styles.containerHeaderWrapper;

  return (
    <section className={containerClassName} style={containerStyle}>
      <div className={containerHeaderWrapperClassName}>
        {title && (
          <h2 className={styles.title} style={titleStyle}>
            {title}
          </h2>
        )}
        {description && (
          <>
            <span className={styles.descLine}></span>
            <p className={styles.desc}>{description}</p>
          </>
        )}
      </div>
      {children}
    </section>
  );
};

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
