import styles from "./sectionContainer.module.css"

interface ContainerProps {
  title?: string;
  bgImg?: string;
  titleColor?: string;
  children?: React.ReactNode;
  description?: string;
  centerTitle?: boolean;
}

const SectionContainer: React.FC<ContainerProps> = ({
  title,
  bgImg,
  titleColor = "#151515",
  children,
  description,
  centerTitle = false,
}) => {
  const containerStyle = {
    backgroundImage: bgImg ? `url(${bgImg})` : "none",
  };

  const titleStyle = {
    color: titleColor,
  };

  const containerClassName = `${styles.container} ${bgImg ? styles.hasBgImg : ""}`;

  const containerHeaderWrapperClassName = centerTitle
    ? `${styles.containerHeaderWrapper} ${styles.centered}`
    : styles.containerHeaderWrapper;

  return (
    <div className={containerClassName} style={containerStyle}>
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
    </div>
  );
};

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
