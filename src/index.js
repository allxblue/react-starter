import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store, { history } from './store'

import App from './App';
import * as serviceWorker from './serviceWorker';

// 入口
const rootDiv = document.getElementById('app');
render(
  <Provider store={store}>
    <App />
  </Provider>,
rootDiv);

serviceWorker.unregister();
