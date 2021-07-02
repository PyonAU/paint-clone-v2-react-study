import React from 'react';
import styles from './ActiveTool.module.css';

function ActiveTool( { eraserIcon }) {

  const text = eraserIcon ? 'Eraser' : 'Brush';

  return (
    <div>
      <span className={styles.activeTool} id="active-tool" title="Active Tool">{text}</span>
    </div>
  );
}

export default ActiveTool;
