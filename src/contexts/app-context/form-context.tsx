import { useContext, useState } from 'react';
import { Context } from '@contexts/app-context/app-context-provider';

export function useCreateFormContext() {
  const [storeTitle, setStoreTitle] = useState('');
  const [storeAuthor, setStoreAuthor] = useState('');
  const [storeYear, setStoreYear] = useState('');
  const [storeSeries, setStoreSeries] = useState('');
  const [storeDimensions, setStoreDimensions] = useState('');

  return {
    title: [storeTitle, setStoreTitle],
    author: [storeAuthor, setStoreAuthor],
    year: [storeYear, setStoreYear],
    series: [storeSeries, setStoreSeries],
    dimensions: [storeDimensions, setStoreDimensions],
  };
}

export function useFormContext() {
  const context = useContext(Context);

  if (!context) throw new Error('Use app context within provider');

  return context.form;
}
