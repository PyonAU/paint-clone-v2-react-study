import React from "react";
import styles from "./Eraser.module.css";

function Eraser({ eraserChosen, eraserIcon }) {

  const eraserIconColor = eraserIcon ? 'black' : 'white';

  return (
    <div className={styles.tool}>
      <i
        className={`${styles.fas} fas fa-eraser`}
        id="eraser"
        title="Eraser"
        onClick={eraserChosen}
        style={{color: eraserIconColor}}
      ></i>
    </div>
  );
}

export default Eraser;
