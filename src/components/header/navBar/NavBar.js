import React, { Fragment } from 'react';
import styles from './NavBar.module.scss';
import Media from 'react-media';

import Navigation from '../navigation/Navigation';

import { ReactComponent as Logo } from '../../../ui/logo.svg';
import BurgerMenu from '../burgerMenu/BurgerMenu';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Media query="(max-width: 1199px)">
          <BurgerMenu />
        </Media>
        <Media query="(min-width: 1200px)">
          <Navigation />
        </Media>
      </>
    </div>
  );
};

export default NavBar;
