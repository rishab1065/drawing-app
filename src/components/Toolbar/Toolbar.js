import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Toolbar.scss';

function Toolbar({ cursorStyle, setCursorStyle }) {
  const [selectedTool, setSelectedTool] = useState(null);

  const onColorChange = (event) => {
    setCursorStyle({ ...cursorStyle, strokeStyle: event.target.value });
  };

  const getCursorStyle = (lineWidth, opacity, strokeStyle, tool) => {
    if (strokeStyle === 'white' && tool !== 'eraser') {
      strokeStyle = 'black';
    }
    if (opacity === 0.5 && tool !== 'highlighter') {
      opacity = 1;
    }
    return { lineWidth, opacity, strokeStyle };
  };
  
  return (
    <div className="Toolbar">
      <div className="Tools_Container">
        <div
          className={`Tool Brush Tooltip ${
            selectedTool === 'brush' ? 'selected' : ''
          }`}
          onClick={() => setSelectedTool('brush')}
        >
          <div className="Tooltip_Text">Brush</div>
        </div>
        <div
          className={`Tool Highlighter Tooltip ${
            selectedTool === 'highlighter' ? 'selected' : ''
          }`}
          onClick={() => {
            setSelectedTool('highlighter');
            setCursorStyle(
              getCursorStyle(5, 0.5, cursorStyle.strokeStyle, 'highlighter')
            );
          }}
        >
          <div className="Tooltip_Text">Highlighter</div>
        </div>
        <div
          className={`Tool Eraser Tooltip ${
            selectedTool === 'eraser' ? 'selected' : ''
          }`}
          onClick={() => {
            setSelectedTool('eraser');
            setCursorStyle(
              getCursorStyle(
                cursorStyle.lineWidth,
                cursorStyle.opacity,
                'white',
                'eraser'
              )
            );
          }}
        >
          <div className="Tooltip_Text">Eraser</div>
        </div>
      </div>
      {(selectedTool === 'brush' || selectedTool === 'highlighter') && (
        <div className="SubTools_Container">
          {selectedTool === 'brush' && (
            <>
              <div
                className="Brush_Thickness Tooltip"
                onClick={() => {
                  setCursorStyle(
                    getCursorStyle(1, 1, cursorStyle.strokeStyle, 'brush')
                  );
                  setSelectedTool(null);
                }}
              >
                <div className="Brush_Small" />
                <div className="Tooltip_Text">1px</div>
              </div>
              <div
                className="Brush_Thickness Tooltip"
                onClick={() => {
                  setCursorStyle(
                    getCursorStyle(3, 1, cursorStyle.strokeStyle, 'brush')
                  );
                  setSelectedTool(null);
                }}
              >
                <div className="Brush_Medium" />
                <div className="Tooltip_Text">3px</div>
              </div>
              <div
                className="Brush_Thickness Tooltip"
                onClick={() => {
                  setCursorStyle(
                    getCursorStyle(5, 1, cursorStyle.strokeStyle, 'brush')
                  );
                  setSelectedTool(null);
                }}
              >
                <div className="Brush_Large" />
                <div className="Tooltip_Text">5px</div>
              </div>
            </>
          )}
          <div className="Tool_Color Tooltip">
            <input
              type="color"
              id="html5colorpicker"
              onChange={onColorChange}
              defaultValue={cursorStyle.strokeStyle}
            />
            <div className="Tooltip_Text">Color Picker</div>
          </div>
        </div>
      )}
    </div>
  );
}

Toolbar.propTypes = {
  cursorStyle: PropTypes.shape({
    lineWidth: PropTypes.number,
    opacity: PropTypes.number,
    strokeStyle: PropTypes.string,
  }),
  setCursorStyle: PropTypes.func,
};

export default Toolbar;
