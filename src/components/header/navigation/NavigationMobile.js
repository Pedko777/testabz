import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationMobile.module.scss';

import { ReactComponent as Logo } from '../../../ui/logo.svg';

const { navList, navLink, navLinkActive } = styles;

const NavigationMobile = () => (
  <nav className={styles.navContainer}>
    <ul className={navList}>
      <li className={styles.navListItem}>
        <ul className={styles.logoWrapper}>
          <li className={styles.logoLink}>
            <NavLink
              to="#"
              exact
              className={navLink}
              activeClassName={navLinkActive}
            >
              <Logo />
            </NavLink>
          </li>
        </ul>
      </li>
      <li className={styles.navListItem}>
        <ul className={styles.navListWrapper}>
          <li className={styles.navListItemWrapper}>
            <NavLink
              to="#"
              exact
              className={navLink}
              activeClassName={navLinkActive}
            >
              Aboute me
            </NavLink>
          </li>
          <li className={styles.navListItemWrapper}>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Relationships
            </NavLink>
          </li>
          <li className={styles.navListItemWrapper}>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Requirements
            </NavLink>
          </li>
          <li className={styles.navListItemWrapper}>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Users
            </NavLink>
          </li>
          <li className={styles.navListItemWrapper}>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </li>
      <li className={styles.navListItem}>
        <ul className={styles.navListWrapper}>
          <li>
            <NavLink
              to="#"
              exact
              className={navLink}
              activeClassName={navLinkActive}
            >
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Partnership
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Help
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Leave testimonial
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Contact us
            </NavLink>
          </li>
        </ul>
      </li>
      <li className={styles.navListItem}>
        <ul className={styles.navListWrapper}>
          <li>
            <NavLink
              to="#"
              exact
              className={navLink}
              activeClassName={navLinkActive}
            >
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Our news
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Licenses
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={navLink} activeClassName={navLinkActive}>
              Privacy Policy
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
    <div className={styles.rightBar}></div>
  </nav>
);

export default NavigationMobile;
