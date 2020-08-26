import React from 'react';
import Navigation from './navigation/Navigation';
import { Link } from 'react-router-dom';

import Media from 'react-media';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../ui/logo.svg';
import NavBar from './navBar/NavBar';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <NavBar />
    </header>
  );
};
export default Header;
