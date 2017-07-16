import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import DevTools from '../components/dev-tools/dev-tools';
import reducers from '../reducers/reducers';

const loggerMiddleware = createLogger();

const configureStore = (preloadedState) => {
  return createStore(
    reducers,
    preloadedState,
    compose(
      DevTools.instrument(),
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );
};

export default configureStore;
