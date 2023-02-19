import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import './index.css';
import App from './App';
import store from './store/store';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CacheProvider value={muiCache}>
        <App />
      </CacheProvider>
    </Provider>
  </React.StrictMode>,
);
