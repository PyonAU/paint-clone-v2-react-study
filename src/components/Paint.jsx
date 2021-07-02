import React, { useState } from 'react';
import ActiveTool from './ActiveTool';
import Brush from './Brush';
import Bucket from './Bucket';
import Eraser from './Eraser';
import Clear from './Clear';
import LocalStorage from './LocalStorage';
import DownloadImage from './DownloadImage';
import Canvas from './Canvas';
import styles from './Paint.module.css';

function Paint() {
  // State
  const [colorHexCode, setColorHexCode] = useState({
    brushColor: '#A51DAB',
    bucketColor: '#FFFFFF'
  });
  const [isBrushColorClicked, setBrushColorClicked] = useState(false);
  const [isBucketColorClicked, setBucketColorClicked] = useState(false);
  const [sliderSize, setSliderSize] = useState(10);
  const [isIconClicked, setIconClicked] = useState({
    brushIcon: true,
    eraserIcon: false
  });

  // Destructuring
  const { brushColor, bucketColor } = colorHexCode;
  const { brushIcon, eraserIcon } = isIconClicked;

  const handleColorCode = (event) => {
    if (isBrushColorClicked) {
      setColorHexCode({ ...colorHexCode, brushColor: event.hex });
    }
    if (isBucketColorClicked) {
      setColorHexCode({ ...colorHexCode, bucketColor: event.hex });
    }
  };

  const showBrushColorPicker = () => {
    setBrushColorClicked((prevState) => !prevState);
    setBucketColorClicked(false);
  };

  const showBucketColorPicker = () => {
    setBucketColorClicked((prevState) => !prevState);
    setBrushColorClicked(false);
  };

  const inputChangeForBrush = (event) => {
    setColorHexCode({ ...colorHexCode, brushColor: event.target.value });
  };

  const inputChangeForBucket = (event) => {
    setColorHexCode({ ...colorHexCode, bucketColor: event.target.value });
  };

  const handleSliderChange = (event) => {
    setSliderSize(event.target.valueAsNumber);
  };

  const eraserChosen = () => {
    setIconClicked({brushIcon: false, eraserIcon: true});
  };

  const brushChosen = () => {
    setIconClicked({brushIcon: true, eraserIcon: false});
  };

  return (
    <>
      <div className={styles.topBar}>
        <ActiveTool
          eraserIcon={eraserIcon}
        />
        <Brush
          handleColorCode={handleColorCode}
          brushColor={brushColor}
          showBrushColorPicker={showBrushColorPicker}
          isBrushColorClicked={isBrushColorClicked}
          inputChangeForBrush={inputChangeForBrush}
          handleSliderChange={handleSliderChange}
          sliderSize={sliderSize}
          brushIcon={brushIcon}
          brushChosen={brushChosen}
        />
        <Bucket
          bucketColor={bucketColor}
          handleColorCode={handleColorCode}
          showBucketColorPicker={showBucketColorPicker}
          isBucketColorClicked={isBucketColorClicked}
          inputChangeForBucket={inputChangeForBucket}
        />
        <Eraser 
          eraserChosen={eraserChosen}
          eraserIcon={eraserIcon}
        />
        <Clear />
        <LocalStorage />
        <DownloadImage />
      </div>
      {brushColor && (
        <Canvas
          brushColor={brushColor}
          bucketColor={bucketColor}
          sliderSize={sliderSize}
          isBrushColorClicked={isBrushColorClicked}
        />
      )}
    </>
  )
}

export default Paint;