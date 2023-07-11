import React, { useState, useRef, useEffect } from "react";
import useWindowSize from "./useWindowSize";

function Canvas(props) {
  // State
  const [drawing, setDrawing] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [drawnArray, setDrawnArray] = useState([]);

  // Ref
  const canvasRef = useRef();
  const ctx = useRef();

  // Draw what is stored in DrawnArray
  const restoreCanvas = () => {
    for (let i = 1; i < drawnArray.length; i++) {
      ctx.current.beginPath();
      ctx.current.moveTo(drawnArray[i - 1].x, drawnArray[i - 1].y);
      ctx.current.lineWidth = drawnArray[i].size;
      ctx.current.lineCap = "round";

      if (drawnArray[i].erase) {
        ctx.current.strokeStyle = props.bucketColor;
        ctx.current.lineWidth = "50";
      } else {
        ctx.current.strokeStyle = drawnArray[i].color;
      }

      ctx.current.lineTo(drawnArray[i].x, drawnArray[i].y);
      ctx.current.stroke();
    }
  };

  // Store Drawn Lines in DrawnArray
  const storeDrawn = (x, y, size, color, erase) => {
    setDrawnArray((prevState) => {
      const line = {
        x,
        y,
        size,
        color,
        erase,
      };
      return [...prevState, line];
    });
  };

  console.log("drawnArray:", drawnArray);

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    ctx.current.fillStyle = props.bucketColor;
    ctx.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  }, []);

  useEffect(() => {
    ctx.current.fillStyle = props.bucketColor;
    ctx.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    if (props.isCleared) {
      setDrawnArray([]);
    } else {
      restoreCanvas();
    }
  }, [props.bucketColor, props.isCleared]);

  const [windowWidth, windowHeight] = useWindowSize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    ctx.current.fillStyle = props.bucketColor;
    ctx.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  });

  const handleMouseMove = (event) => {
    const coords = [
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop,
    ];
    if (drawing) {
      ctx.current.lineTo(...coords);
      ctx.current.stroke();
      props.eraserIcon
        ? storeDrawn(
          coords[0],
          coords[1],
          50,
          props.bucketColor,
          props.eraserIcon
        )
        : storeDrawn(
          coords[0],
          coords[1],
          props.sliderSize,
          props.brushColor,
          props.eraserIcon
        );
    } else if (props.handleMouseMove) {
      props.handleMouseMove(...coords);
    } else {
      storeDrawn(undefined);
    }
  };

  const startDrawing = (event) => {
    ctx.current.lineJoin = "round";
    ctx.current.lineCap = "round";

    if (props.brushIcon) {
      ctx.current.lineWidth = props.sliderSize;
      ctx.current.strokeStyle = props.brushColor;
    }
    if (props.eraserIcon) {
      ctx.current.lineWidth = "50";
      ctx.current.strokeStyle = props.bucketColor;
    }

    ctx.current.beginPath();

    ctx.current.moveTo(
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop
    );
    setDrawing(true);
    props.setIsCleared(false);
    props.setIsSaved(false);
    props.setGetSavedDrawing(false);
    props.setLocalStorageCleared(false);
    props.setDownloadImage(false);
  };

  const stopDrawing = () => {
    ctx.current.closePath();
    setDrawing(false);
  };

  useEffect(() => {
    if (props.isSaved) {
      localStorage.setItem('savedDrawing', JSON.stringify(drawnArray));
    }
  }, [props.isSaved]);

  useEffect(() => {
    const savedDrawing = localStorage.getItem('savedDrawing');
    if (savedDrawing) {
      setDrawnArray(JSON.parse(savedDrawing));
    }
    restoreCanvas();
  }, [props.getSavedDrawing]);

  useEffect(() => {
    if (props.localStorageCleared) {
      localStorage.removeItem('savedDrawing');
    }
  }, [props.localStorageCleared]);

  useEffect(() => {
    if (props.downloadImage) {
      const url = canvasRef.current.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.download = 'filename.jpeg';
      link.href = url;
      link.click();
    }
  }, [props.downloadImage]);

  return (
    <canvas
      ref={canvasRef}
      width={props.width || width}
      height={props.height || height}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
      onMouseMove={handleMouseMove}
    />
  );
}

export default Canvas;
