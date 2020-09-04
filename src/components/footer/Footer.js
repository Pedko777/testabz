import React from 'react';
import styles from './footer.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={` ${styles.sectionContainer} container`}>
      <NavLink to="#" exact className={styles.navLink}>
        © abz.agency specially for the test task
      </NavLink>
    </div>
  );
};

export default Footer;
