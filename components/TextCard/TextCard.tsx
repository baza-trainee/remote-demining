import styles from "./TextCard.module.css";

interface TextCardProps {
  title?: string;
  text: string;
  customBorderRadius?: string;
  customBgColor?: string;
  customColor?: string;
  customWidth?: string;
  customHeigh?: string;
}

const TextCard: React.FC<TextCardProps> = ({
  title,
  text,
  customBorderRadius,
  customBgColor,
  customColor,
  customWidth,
  customHeigh,
}) => {
  const bodyStyle = {
    backgroundColor: customBgColor,
    borderRadius: customBorderRadius,
    color: customColor,
    weight: customWidth,
    heigh: customHeigh,
  };

  return (
    <div className={styles.body} style={bodyStyle}>
      {title ? <h3 className={styles.title}>{title}</h3> : ""}
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default TextCard;
