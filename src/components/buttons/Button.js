import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text, onClick }) => {
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

export default Button;
