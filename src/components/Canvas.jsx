import React, { useState, useRef, useEffect } from 'react';
import useWindowSize from './useWindowSize';

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
  function restoreCanvas() {
    for (let i = 1; i < drawnArray.length; i++) {
      ctx.current.beginPath();
      ctx.current.moveTo(drawnArray[i - 1].x, drawnArray[i - 1].y);
      ctx.current.lineWidth = drawnArray[i].size;
      ctx.current.lineCap = 'round';

      ctx.current.strokeStyle = drawnArray[i].color;
      ctx.current.lineTo(drawnArray[i].x, drawnArray[i].y);
      ctx.current.stroke();
    }
  }

  // Store Drawn Lines in DrawnArray
  function storeDrawn(x, y, size, color) {
      setDrawnArray((prevState) => {
        const line = {
          x,
          y,
          size,
          color,
        };
        return [...prevState, line];
      });
  }

  useEffect(() => {
    ctx.current = canvasRef.current.getContext('2d');
    ctx.current.fillStyle = props.bucketColor;
    ctx.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }, []);

  useEffect(() => {
    ctx.current.fillStyle = props.bucketColor;
    ctx.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    restoreCanvas()
  }, [props.bucketColor]);

  const [windowWidth, windowHeight] = useWindowSize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    ctx.current.fillStyle = props.bucketColor;
    ctx.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  });

  const handleMouseMove = (event) => {
    const coords = [
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop
    ];
    if (drawing) {
      ctx.current.lineTo(...coords);
      ctx.current.stroke();
      storeDrawn(coords[0], coords[1], props.sliderSize, props.brushColor);
    } else if (props.handleMouseMove) {
      props.handleMouseMove(...coords)
    } else {
      storeDrawn(undefined);
    }
  };

  console.log('drawnArray:', drawnArray);

  const startDrawing = (event) => {
    ctx.current.lineJoin = 'round';
    ctx.current.lineCap = 'round';
    ctx.current.lineWidth = props.sliderSize;
    ctx.current.strokeStyle = props.brushColor;
    ctx.current.beginPath();

    ctx.current.moveTo(
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop
    );
    setDrawing(true);
  };

  const stopDrawing = () => {
    // ctx.current.closePath();
    setDrawing(false);
  };

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