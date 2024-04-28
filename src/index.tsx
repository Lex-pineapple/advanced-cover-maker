import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from '@contexts/app-context/app-context-provider';

import { App } from './app';

import './index.scss';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);
