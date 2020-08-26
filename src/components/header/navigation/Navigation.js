import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const { navList, navLink, navLinkActive } = styles;

const Navigation = () => (
  <nav className={styles.navContainer}>
    <ul className={navList}>
      <li>
        <NavLink
          to="#"
          exact
          className={navLink}
          activeClassName={navLinkActive}
        >
          Aboute me
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
          Relationships
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
          Requirements
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
          Sign Up
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
