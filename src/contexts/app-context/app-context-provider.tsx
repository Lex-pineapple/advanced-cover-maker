import { createContext, useContext, useState } from 'react';
import { useCreateFormContext } from '@contexts/app-context/form-context';

type AppContextProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

export const Context = createContext(null);

export function useCreateAppContext() {
  return {
    form: useCreateFormContext(),
  };
}

export function useAppContext() {
  const context = useContext(Context);

  if (!context) throw new Error('Use app context within provider');

  return context;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const context = useCreateAppContext();

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
