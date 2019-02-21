import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store, { history } from './store'
import { ConnectedRouter } from 'connected-react-router'

import App from 'containers/App';
import * as serviceWorker from './serviceWorker';

// 入口
const rootDiv = document.getElementById('app');
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
rootDiv);

serviceWorker.unregister();
