import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import Media from 'react-media';

import { ReactComponent as Burger } from '../../../ui/menuIcon.svg';
import { ReactComponent as Close } from '../../../ui/close.svg';

import Navigation from '../navigation/Navigation';
import NavigationMobile from '../navigation/NavigationMobile';
const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.tabletBurger}>
      <div
        className={styles.burgerMenuWrapper}
        open={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <Close /> : <Burger />}
      </div>
      <Media query="(min-width: 768px) and (max-width: 1199px)">
        {open && <Navigation />}
      </Media>
      <Media query="(max-width: 767px)">{open && <NavigationMobile />}</Media>
    </div>
  );
};

export default BurgerMenu;
