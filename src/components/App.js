import React, { Suspense } from 'react';
import {
  BrowserRouter,
  // Switch,
  // Redirect,
  // Route,
  // NavLink,
} from 'react-router-dom';
import ReactLoading from 'react-loading';

import Header from './header/Header';
import AbouteMe from './body/abouteMe/AbouteMe';
// console.log(test)

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <ReactLoading
              type={'spin'}
              color={'#000'}
              height={'20%'}
              width={'20%'}
            />
          }
        >
          <Header />
          <AbouteMe />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
