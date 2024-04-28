import { useContext, useState } from 'react';
import { Context } from '@contexts/app-context/app-context-provider';

export function useCreateFormContext() {
  const [store, setStoreTitle] = useState('');

  return {
    title: [store, setStoreTitle],
  };
}

export function useFormContext() {
  const context = useContext(Context);

  if (!context) throw new Error('Use app context within provider');

  return context.form;
}
