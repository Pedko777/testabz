import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom';

import './normalize.scss';
import './scss/fonts.scss';
import './scss/mixin.scss';
import './scss/variables.scss';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
