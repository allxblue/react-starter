import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'

import thunk from 'redux-thunk'
import createRootReducer from './reducers'
import { CONTEXT_PATH } from 'common/constants'

export const history = createHistory({
  basename: CONTEXT_PATH,
});

const initialState = {
}

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

// history.listen(location => {
//   window.history.pushState(null, null, location.pathname);
//     window.onpopstate = function () {
//         history.go(1);
//     };
// });

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
)

export default store;