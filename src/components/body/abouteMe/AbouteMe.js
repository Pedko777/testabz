import React from 'react';
import Media from 'react-media';
import styles from './AbouteMe.module.scss';
import Button from '../../buttons/Button';
const AbouteMe = () => {
  return (
    <div className={`${styles.sectionWrapper} container`}>
      <div className={styles.elementWrapper}>
        <h1 className={styles.sectionTitle}>
          Test assignment for Frontend Developer position
        </h1>
        <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              <p className={styles.sectionDescription}>
                We kindly remind you that your test assignment should be
                submitted as a link to github/bitbucket repository.
              </p>
            ) : (
              <p className={styles.sectionDescription}>
                We kindly remind you that your test assignment should be
                submitted as a link to github/bitbucket repository. Please be
                patient, we consider and respond to every application that meets
                minimum requirements. We look forward to your submission. Good
                luck! The photo has to scale in the banner area on the different
                screens
              </p>
            )
          }
        </Media>

        <Button text="Sing up now" />
      </div>
    </div>
  );
};

export default AbouteMe;
