import React from 'react';
import styles from './ActiveTool.module.css';

function ActiveTool() {
  return (
    <div>
      <span className={styles.activeTool} id="active-tool" title="Active Tool">Brush</span>
    </div>
  );
}

export default ActiveTool;
