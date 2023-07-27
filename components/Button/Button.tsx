import styles from "./Button.module.css";
import classNames from "classnames";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFullWidth?: boolean;
  disabled?: boolean;
  children: string;
  width?: string;
  height?: string;
  donateBtn?: boolean;
  sliderBtn?: boolean;
  formBtn?: boolean;
  supportBtn?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  isFullWidth,
  disabled,
  children,
  onClick,
  width,
  height,
  donateBtn,
  sliderBtn,
  formBtn,
  supportBtn,
  className,
  ...rest
}) => {
  const buttonClassName = classNames(
    styles.button,
    isFullWidth ? styles.fullWidth : null,
    donateBtn ? styles.donateBtn : null,
    sliderBtn ? styles.sliderBtn : null,
    formBtn ? styles.formBtn : null,
    supportBtn ? styles.supportBtn : null,
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
