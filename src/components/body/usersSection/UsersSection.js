import React from 'react';
import styles from './UsersSection.module.scss';
import Button from '../../buttons/Button';
import UsersCardList from '../../usersCardList/UsersCardList';

const UsersSection = () => {
  return (
    <div className={`${styles.sectionWrapper} container`}>
      <h2 className={styles.sectionTitle}>Our cheerful users</h2>
      <p className={styles.sectionDescription}>
        Attention! Sorting users by registration date
      </p>
      <UsersCardList />
      <Button text="Show more" />
    </div>
  );
};

export default UsersSection;
