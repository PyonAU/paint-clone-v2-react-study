import React from 'react';
import styles from './Brush.module.css';
import cx from 'classnames'

function Brush() {
  
  // classnames
  const brushTool = cx(styles.brush, styles.tool);
  
  return (
    <div className={brushTool}>
      <i className={`${styles.fas} fas fa-brush `}  id="brush" title="Brush"></i>
      <input className="jscolor" value="a51dab" id="brush-color" />
      <span className={styles.size} id="brush-size" title="Brush Size">10</span>
      <input type="range" min="1" max="50" value="10" className={styles.slider} id="brush-slider" />
    </div>
  );
}

export default Brush;