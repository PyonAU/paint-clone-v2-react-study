import React from 'react';
import ActiveTool from './ActiveTool';
import Brush from './Brush';
import Bucket from './Bucket';
import Eraser from './Eraser';
import Clear from './Clear';
import LocalStorage from './LocalStorage';
import DownloadImage from './DownloadImage';
import styles from './Paint.module.css';

function Paint() {
  return (
    <div className={styles.topBar}>
      <ActiveTool />
      <Brush />
      <Bucket />
      <Eraser />
      <Clear />
      <LocalStorage />
      <DownloadImage />
    </div>
  )
}

export default Paint;