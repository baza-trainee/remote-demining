import styles from "./Button.module.css";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFullWidth?: boolean;
  disabled?: boolean;
  children: string;
  width?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  isFullWidth,
  disabled,
  children,
  onClick,
  width,
  height,
  ...rest
}) => {
  const buttonClassName = `${styles.button} ${isFullWidth && styles.fullWidth}`;

  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      disabled={disabled}
      style={{ width: width, height: height }}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
