import React from 'react';
import styles from './userCard.module.scss';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as PhotoCover } from '../../ui/photoCover.svg';

const UserCard = ({ user }) => {
  const { photo, position, phone } = user;

  const maxNameLength = () => {
    const nameSplit = user.name.split(' ').map(oneName => {
      if (oneName.length > 16) {
        return oneName.slice(0, 16) + '...';
      } else {
        return oneName;
      }
    });
    return nameSplit.join(' ');
  };

  const maxTextLength = () => {
    const nameSlice = maxNameLength();
    if (nameSlice.length > 38) {
      return nameSlice.slice(0, 38) + '...';
    } else {
      return nameSlice;
    }
  };

  const maxEmailLength = () => {
    if (user?.email.length > 21) {
      return user?.email.slice(0, 21) + '...';
    } else {
      return user.email;
    }
  };

  const LightTooltip = withStyles(theme => ({
    tooltip: {
      fontSize: 14,
      backgroundColor: '#000000',
    },
  }))(Tooltip);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardPhoto}>
        <div className={styles.imgBorder}>
          {photo ? (
            <img
              src={photo}
              alt="cardPhoto"
              width="70"
              height="70"
              className={styles}
            ></img>
          ) : (
            <PhotoCover />
          )}{' '}
        </div>
      </div>
      <div className={styles.cardTextWrapper}>
        <LightTooltip interactive title={user.name} className={styles.tooltip}>
          <h3 className={styles.cardName}>{maxTextLength()}</h3>
        </LightTooltip>
        <p className={styles.cardText}>{position}</p>
        <LightTooltip title={user.name} interactive>
          <p className={styles.cardText}>{maxEmailLength()}</p>
        </LightTooltip>

        <p className={styles.cardText}>{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
