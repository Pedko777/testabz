import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text, onClick, disabled, type }) => {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      type={type}
      // data-type="yes"
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
