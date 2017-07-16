import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import DevTools from '../components/dev-tools/dev-tools';
import reducers from '../reducers/reducers';

const rootReducer = combineReducers({
  contactList: reducers,
  form: formReducer
});

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
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
