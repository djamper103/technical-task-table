import React, { FC } from 'react';
import style from './index.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StartArgsType } from '../../types/array';

type FormData = {
  line: string;
  column: string;
};

const schema = yup
  .object({
    line: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(0, 'Must be exactly 0 digits')
      .max(2, 'Must be exactly 100 digits'),
    column: yup
      .string()
      .min(0, 'Must be exactly 0 digits')
      .max(2, 'Must be exactly 100 digits')
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
  })
  .required();

interface FormProps {
  onSubmitForm: (value?: StartArgsType) => void;
  buttonNameFirst: string;
  buttonNameSecond: string;
}

export const Form: FC<FormProps> = ({
  onSubmitForm,
  buttonNameFirst = 'buttonNameFirst',
  buttonNameSecond = 'buttonNameSecond'
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    onSubmitForm({ line: data.line, column: data.column });
  };

  const submitSecond = () => {
    onSubmitForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      <label>Line</label>
      <input {...register('line')} />
      <p>{errors.line?.message}</p>

      <label>Column</label>
      <input {...register('column')} />
      <p>{errors.column?.message}</p>

      <input type="submit" value={buttonNameFirst} />
      <input type="submit" value={buttonNameSecond} onClick={submitSecond} />
    </form>
  );
};
