import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function DrawingBoard(props) {
  const drawingBoardRef = useRef(null);
  const canvasContext = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = drawingBoardRef.current;
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvasContext.current = canvas.getContext('2d');
    canvasContext.current.scale(
      window.devicePixelRatio,
      window.devicePixelRatio
    );
    canvasContext.current.strokeStyle = 'black';
    canvasContext.current.lineWidth = 2;
    return () => {
      canvasContext.current.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  function onMouseDown(event) {
    const { offsetX, offsetY } = event.nativeEvent;
    if (!canvasContext || !canvasContext.current) return;
    setIsDrawing(true);
    canvasContext.current.beginPath();
    canvasContext.current.moveTo(offsetX, offsetY);
  }
  function onMouseUp(event) {
    setIsDrawing(false);
  }
  function onMouseMove(event) {
    const { offsetX, offsetY } = event.nativeEvent;
    if (!canvasContext || !canvasContext.current || !isDrawing) return;
    canvasContext.current.lineTo(offsetX, offsetY);
    canvasContext.current.stroke();
  }
  return (
    <canvas
      className="drawingBoard"
      ref={drawingBoardRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    />
  );
}

DrawingBoard.propTypes = {};

export default DrawingBoard;
