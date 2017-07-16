import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import DevTools from '../components/dev-tools/dev-tools';
import reducers from '../reducers/reducers';

const configureStore = (preloadedState) => {
  return createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      DevTools.instrument()
    )
  );
};

export default configureStore;
