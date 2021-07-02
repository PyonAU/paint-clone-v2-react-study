import React from "react";
import { SketchPicker } from "react-color";
import styles from "./Bucket.module.css";
import cx from "classnames";

function Bucket({
  bucketColor,
  handleColorCode,
  showBucketColorPicker,
  isBucketColorClicked,
  inputChangeForBucket
}) {

  // classnames for styling
  const bucketTool = cx(styles.bucket, styles.tool);

  const bucketColorHex = bucketColor.toUpperCase();

  return (
    <div className={bucketTool}>
      <i
        className={`${styles.fas} fas fa-fill-drip`}
        title="Background Color"
      ></i>
      <input
        className={styles.labelStyle}
        value={bucketColorHex}
        id="bucket-color"
        onClick={showBucketColorPicker}
        style={{ backgroundColor: bucketColor }}
        onChange={inputChangeForBucket}
      />
      <div className={styles.colorPalette}>
        {isBucketColorClicked && (
          <SketchPicker 
            color={bucketColor} 
            onChange={handleColorCode} 
          />
        )}
      </div>
    </div>
  );
}

export default Bucket;
