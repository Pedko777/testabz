import React from 'react';

import styles from './AbouteMe.module.scss';
import overlay from '../../../ui/banner-photo.jpg';
const AbouteMe = () => {
  return (
    <div className={`${styles.sectionWrapper} container`}>
      <img src={overlay} className={styles.AbouteMeImg} alt="overlay" />
    </div>
  );
};

export default AbouteMe;
