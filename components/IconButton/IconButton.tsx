import Image from 'next/image';
import css from './iconButton.module.css';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  width?: string;
  border?: string;
  height?: string;
  gap?: string;
  padding?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<Props> = ({
  icon,
  label,
  width,
  height,
  padding,
  border,
  gap,
  color,
  onClick
}) => {

  return (
    <button
      className={css.iconButton}
      style={{ width: width, height: height, gap: gap, border: border, padding: padding, color: color }}
      onClick={onClick}
    >
      <Image alt='admin-icon' src={icon}/>
      <span className={css.label}>{label}</span>
    </button>
  );
};

IconButton.displayName = "IconButton";

export default IconButton;
