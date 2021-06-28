import React from 'react';
import styles from './DownloadImage.module.css';

function DownloadImage() {
  return (
    <div className={styles.tool}>
      <a id="download">
        <i className={`${styles.far} far fa-save`} title="Save Image File"></i>
      </a>
    </div>
  );
}

export default DownloadImage;