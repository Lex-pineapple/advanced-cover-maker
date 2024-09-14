import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '@/schemas/form';
import { Input } from '@shared/input';

import styles from './form.module.scss';
export const Form = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      series: '',
      author: '',
      year: 0,
      title: '',
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (values: any) => {
    console.log('values', values);
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='series'
          render={({ field }) => <Input label='Series' {...field} />}
        />
        <Controller
          control={control}
          name='author'
          render={({ field }) => <Input label='Author' {...field} />}
        />
        <Controller
          control={control}
          name='title'
          render={({ field }) => <Input label='Title' {...field} />}
        />
        <Controller
          control={control}
          name='year'
          render={({ field }) => <Input label='Year' {...field} />}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};
