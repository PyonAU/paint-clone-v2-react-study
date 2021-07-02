import React from "react";
import { SketchPicker } from "react-color";
import styles from "./Brush.module.css";
import cx from "classnames";

function Brush({
  handleColorCode,
  brushColor,
  showBrushColorPicker,
  isBrushColorClicked,
  inputChangeForBrush,
  handleSliderChange,
  sliderSize
}) {

  // classnames for styling
  const brushTool = cx(styles.brush, styles.tool);

  const brushColorHex = brushColor.toUpperCase();

  return (
    <div className={brushTool}>
      <i className={`${styles.fas} fas fa-brush `} id="brush" title="Brush"></i>
      <input
        className={styles.labelStyle}
        type="text"
        value={brushColorHex}
        onClick={showBrushColorPicker}
        style={{ backgroundColor: brushColor }}
        onChange={inputChangeForBrush}
      />
      <div className={styles.colorPalette}>
        {isBrushColorClicked && (
          <SketchPicker 
            color={brushColor} 
            onChange={handleColorCode}
          />
        )}
      </div>
      <span className={styles.size} id="brush-size" title="Brush Size">
        {sliderSize < 10 ? `0${sliderSize}` : sliderSize}
      </span>
      <input
        type="range"
        min="1"
        max="50"
        defaultValue={sliderSize}
        className={styles.slider}
        id="brush-slider"
        onChange={handleSliderChange}
      />
    </div>
  );
}

export default Brush;
