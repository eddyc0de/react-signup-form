import React from 'react';
import styles from './Button.module.css';

const Button = props => {
  return <button className={styles.Button} btnstyle={props.btnstyle}>{props.children}</button>;
};

export default Button;