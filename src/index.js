import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import store from './redux/store';
import { Provider } from 'react-redux';

import './normalize.scss';
import './scss/fonts.scss';
import './scss/mixin.scss';
import './scss/variables.scss';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
