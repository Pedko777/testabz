import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';

import Header from './header/Header';
import AbouteMe from './body/abouteMe/AbouteMe';
import DatingSection from './body/datingSection/DatingSection';
import UsersSection from './body/usersSection/UsersSection';
import RegisterFormSection from './body/registerFormSection/RegisterFormSection';
import Footer from './footer/Footer';

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
          <DatingSection />
          <UsersSection />
          <RegisterFormSection />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
