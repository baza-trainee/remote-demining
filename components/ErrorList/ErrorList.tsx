import { FC } from 'react';
import { FieldErrorsImpl } from 'react-hook-form';
import style from './ErrorList.module.css';

interface ErrorsListProps {
  errors: Partial<FieldErrorsImpl<any>>;
}

export const ErrorsList: FC<ErrorsListProps> = ({ errors }) => {
  return (
    <ul className={style.errorList}>
      {(Object.keys(errors) as (keyof typeof errors)[]).map((field) => (
        <li
          key={`error-${String(field)}`}
        >
          {errors[String(field)]!.message as string}
        </li>
      ))}
    </ul>
  );
};
