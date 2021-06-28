import React from 'react';
import styles from './LocalStorage.module.css';

function LocalStorage() {
  return (
    <>
      {/* Save Local Storage */}
      <div className={styles.tool}>
        <i className={`${styles.fas} fas fa-download`} id="save-storage" title="Save Local Storage"></i>
      </div>
      {/* Load Local Storage */}
      <div className={styles.tool}>
        <i className={`${styles.fas} fas fa-upload`} id="load-storage" title="Load Local Storage"></i>
      </div>
      {/* Clear Local Storage */}
      <div className={styles.tool}>
        <i className={`${styles.fas} fas fa-trash-alt`} id="clear-storage" title="Clear Local Storage"></i>
      </div>
    </>
  );
}

export default LocalStorage;