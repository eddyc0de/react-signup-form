import React from 'react';
import styles from './AlertBox.module.css';

const AlertBox = props => {

  const alertTypes = {
    SUCCESS: 'Success',
    ERROR: 'Error'
  };

  let alertBox;
  switch(props.type) {
    case alertTypes.SUCCESS:
      alertBox = <div className={[styles.AlertBox, styles.Success].join(' ')}><p>{props.children}</p></div>;
      break;
    case alertTypes.ERROR:
      alertBox = <div className={[styles.AlertBox, styles.Error].join(' ')}><p>{props.children}</p></div>;
      break;
    default:
      alertBox = null;
      break;
  }

  return alertBox;
};

export default AlertBox;