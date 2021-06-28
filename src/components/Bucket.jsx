import React from 'react';
import styles from './Bucket.module.css';
import cx from 'classnames';

function Bucket() {

  // classnames
  const bucketTool = cx(styles.bucket, styles.tool);
  return (
    <div className={bucketTool}>
      <i className={`${styles.fas} fas fa-fill-drip`} title="Background Color"></i>
      <input className="jscolor" value="ffffff" id="bucket-color" />
    </div>
  );
}

export default Bucket;