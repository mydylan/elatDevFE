import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import configureStore from './store/configure-store';
import DevTools from './components/dev-tools/dev-tools';
import App from './containers/App';
// import Form from './containers/Form';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      {/* <Form /> */}
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
