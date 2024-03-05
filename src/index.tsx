import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app/app';
import { offers } from './mocks/mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers = {offers} />
  </React.StrictMode>
);
