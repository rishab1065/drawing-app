import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DrawingBoard.scss';
function DrawingBoard({ cursorStyle, recordSroke }) {
  const history = [];

  const drawingBoardRef = useRef(null);
  const canvasContext = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = drawingBoardRef.current;
    canvas.width = (window.innerWidth - 200) * window.devicePixelRatio;
    canvas.height = (window.innerHeight - 150) * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth - 200}px`;
    canvas.style.height = `${window.innerHeight - 150}px`;
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
    restoreState();
    canvasContext.current.strokeStyle = cursorStyle.strokeStyle;
    canvasContext.current.lineWidth = cursorStyle.lineWidth;
    canvasContext.current.globalAlpha = cursorStyle.opacity;
    if (recordSroke) {
      history.push({ action: 'beginPath', offsetX, offsetY, ...cursorStyle });
    }
    canvasContext.current.beginPath();
    canvasContext.current.moveTo(offsetX, offsetY);
  }
  function onMouseUp(event) {
    setIsDrawing(false);
  }
  function onMouseMove(event) {
    const { offsetX, offsetY } = event.nativeEvent;
    if (!canvasContext || !canvasContext.current || !isDrawing) return;
    if (recordSroke) {
      history.push({ action: 'lineTo', offsetX, offsetY, ...cursorStyle });
    }
    canvasContext.current.lineTo(offsetX, offsetY);
    canvasContext.current.stroke();
  }

  function restoreState() {
    var i = 0;
    canvasContext.current.clearRect(
      0,
      0,
      drawingBoardRef.current.width,
      drawingBoardRef.current.height
    );
    while (i < history.length) {
      let state = history[i];
      canvasContext.current.strokeStyle = state.strokeStyle;
      canvasContext.current.lineWidth = state.lineWidth;
      canvasContext.current.globalAlpha = state.opacity;
      if (state.action === 'beginPath') {
        canvasContext.current.beginPath();
        canvasContext.current.moveTo(state.offsetX, state.offsetY);
      } else {
        canvasContext.current.lineTo(state.offsetX, state.offsetY);
        canvasContext.current.stroke();
      }
      i++;
    }
  }

  return (
    <canvas
      className="drawingBoard"
      ref={drawingBoardRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseUp}
    />
  );
}

DrawingBoard.propTypes = {
  cursorStyle: PropTypes.shape({
    lineWidth: PropTypes.number,
    opacity: PropTypes.number,
    strokeStyle: PropTypes.string,
  }),
};

export default DrawingBoard;
