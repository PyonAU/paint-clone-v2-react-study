import React from 'react';
import styles from './Eraser.module.css';

function Eraser() {
  return (
    <div className={styles.tool}>
      <i className={`${styles.fas} fas fa-eraser`} id="eraser" title="Eraser"></i>
    </div>
  );
}

export default Eraser;