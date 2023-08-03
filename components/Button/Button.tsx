import styles from "./Button.module.css";
import classNames from "classnames";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFullWidth?: boolean;
  disabled?: boolean;
  children: string;
  width?: string;
  height?: string;
  outlined?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  isFullWidth,
  disabled,
  children,
  onClick,
  width,
  height,
  className,
  outlined,
  ...rest
}) => {
  // const buttonClassName = `${styles.button} ${isFullWidth && styles.fullWidth}`;
  const buttonClassName = classNames(
    styles.button,
    isFullWidth && styles.fullWidth,
    outlined && styles.outlined,
    className
  );

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
