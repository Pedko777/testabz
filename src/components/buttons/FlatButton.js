import React from 'react';
import styles from './FlatButton.module.scss';

const FlatButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      type="button"
      data-type="yes"
    >
      <p>{text}</p>
    </button>
  );
};

export default FlatButton;
