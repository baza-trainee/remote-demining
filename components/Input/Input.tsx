import { ComponentProps, forwardRef } from 'react';
import styles from './Input.module.css';

enum InputSize {
  base = 'base',
  full = 'full',
}

interface InputProps {
  placeholder?: ComponentProps<'input'>['placeholder'];
  name?: ComponentProps<'input'>['name'];
  onChange?: ComponentProps<'input'>['onChange'];
  onBlur?: ComponentProps<'input'>['onBlur'];
  disabled?: ComponentProps<'input'>['disabled'];
  type?: ComponentProps<'input'>['type'];
  size?: keyof typeof InputSize;
  label?: string;
  height?: number;
  width?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = InputSize.base, label, height, width, ...inputProps }, ref) => {
    const InputStyle = {
      height: height ? `${height}px` : undefined,
      width: width ? `${width}px` : undefined,
    };

    return (
      <>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          {...inputProps}
          className={`${styles[size]} ${styles.input}`}
          style={InputStyle}
        />
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
