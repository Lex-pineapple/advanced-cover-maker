import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '@/schemas/form';
import { Input } from '@shared/input';
import { useAppDispatch } from '@/hooks/store';
import { Title } from '@shared/typography/title';
import { Button } from '@shared/button';

import styles from './form.module.scss';

export const Form = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      series: '',
      author: '',
      year: 0,
      title: '',
      size: '',
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (values: any) => {
    dispatch({ type: 'form/setForm', payload: values });
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Title order={5}>Основные данные</Title>
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
        <Controller
          control={control}
          name='size'
          render={({ field }) => <Input label='Size' {...field} />}
        />
        <Button htmlType='submit' type='main' block className={styles.button}>
          Create cover
        </Button>
      </form>
    </div>
  );
};
