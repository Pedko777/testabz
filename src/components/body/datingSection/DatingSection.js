import React from 'react';
import styles from './DatingSection.module.scss';
import FlatButton from '../../buttons/FlatButton';
import Media from 'react-media';
import { ReactComponent as ManLaptop } from '../../../ui/manLaptop.svg';

const DatingSection = () => {
  return (
    <div className={` container`}>
      <div className={` ${styles.sectionWrapper} wrapper`}>
        <h2 className={styles.sectionTitle}>Let's get acquainted</h2>
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <ManLaptop className={styles.svg} />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.secondaryTitle}>
              I am cool frontend developer
            </h3>
            <p className={styles.textContent}>
              We will evaluate how clean your approach to writing CSS and
              Javascript code is. You can use any CSS and Javascript 3rd party
              libraries without any restriction.
            </p>
            <br />
            <p className={styles.textContent}>
              If 3rd party css/javascript libraries are added to the project via
              bower/npm/yarn you will get bonus points. If you use any task
              runner (gulp/webpack) you will get bonus points as well. Slice
              service directory page P​SD mockup​ into HTML5/CSS3.
            </p>
            <Media query=" (min-width: 1024px)">
              <div className={styles.btn}>
                <FlatButton text="Sing up now" />
              </div>
            </Media>
          </div>
        </div>
        <Media query="(max-width: 1023px)">
          <div className={styles.btn}>
            <FlatButton text="Sing up now" className={styles.btnText} />
          </div>
        </Media>
      </div>
    </div>
  );
};

export default DatingSection;
