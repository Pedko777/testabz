import React from 'react';

import styles from './Header.module.scss';
import NavBar from './navBar/NavBar';

const Header = () => {
  return (
    <header className={`${styles.headerWrapper} container`}>
      <NavBar />
    </header>
  );
};
export default Header;
