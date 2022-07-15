import React from "react";
import styles from "./LocalStorage.module.css";

function LocalStorage({ saveToStorage, getFromStorage, clearLocalStorage }) {
  return (
    <>
      {/* Save Local Storage */}
      <div className={styles.tool}>
        <i
          className={`${styles.fas} fas fa-download`}
          id="save-storage"
          title="Save Local Storage"
          onClick={saveToStorage}
        ></i>
      </div>
      {/* Load Local Storage */}
      <div className={styles.tool}>
        <i
          className={`${styles.fas} fas fa-upload`}
          id="load-storage"
          title="Load Local Storage"
          onClick={getFromStorage}
        ></i>
      </div>
      {/* Clear Local Storage */}
      <div className={styles.tool}>
        <i
          className={`${styles.fas} fas fa-trash-alt`}
          id="clear-storage"
          title="Clear Local Storage"
          onClick={clearLocalStorage}
        ></i>
      </div>
    </>
  );
}

export default LocalStorage;
