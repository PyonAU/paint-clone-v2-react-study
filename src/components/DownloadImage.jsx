import React from "react";
import styles from "./DownloadImage.module.css";

function DownloadImage({ saveImage }) {

  return (
    <div className={styles.tool}>
      <a>
        <i
          className={`${styles.far} far fa-save`}
          title="Save Image File"
          onClick={saveImage}
        ></i>
      </a>
    </div>
  );
}

export default DownloadImage;
