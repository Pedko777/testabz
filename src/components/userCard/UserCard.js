import React from 'react';
import styles from './userCard.module.scss';

import { ReactComponent as PhotoCover } from '../../ui/photoCover.svg';

const UserCard = ({ user }) => {
  const { photo, name, position, email, phone } = user;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardPhoto}>
        {photo ? (
          <img
            src={photo}
            alt={name}
            width="70"
            height="70"
            className={styles}
          ></img>
        ) : (
          <PhotoCover />
        )}
      </div>
      <div className={styles.cardTextWrapper}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardText}>{position}</p>
        <p className={styles.cardText}>{email}</p>
        <p className={styles.cardText}>{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
