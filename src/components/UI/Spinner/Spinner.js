import React from 'react';

// STYLES
import styles from './Spinner.css';

const spinner = () => (
  <div className={styles.Spinner} >
    <div className={styles.SpinnerCircle}>
      <div className={[styles.SpinnerCircle1, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle2, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle3, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle4, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle5, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle6, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle7, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle8, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle9, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle10, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle11, styles.skChild].join(' ')}></div>
      <div className={[styles.SpinnerCircle12, styles.skChild].join(' ')}></div>
    </div>
  </div>
);

export default spinner;