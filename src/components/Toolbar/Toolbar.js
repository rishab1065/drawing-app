import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Toolbar.scss';

function Toolbar(props) {
  const [selectedTool, setSelectedTool] = useState(null);

  const onColorChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="Toolbar">
      <div className="Tools_Container">
        <div
          className="Tool Brush Tooltip"
          onClick={() => setSelectedTool('brush')}
        >
          <div className="Tooltip_Text">Brush</div>
        </div>
        <div
          className="Tool Highlighter Tooltip"
          onClick={() => setSelectedTool('highlighter')}
        >
          <div className="Tooltip_Text">Highlighter</div>
        </div>
        <div
          className="Tool Eraser Tooltip"
          onClick={() => setSelectedTool('eraser')}
        >
          <div className="Tooltip_Text">Eraser</div>
        </div>
      </div>
      {(selectedTool === 'brush' || selectedTool === 'highlighter') && (
        <div className="SubTools_Container">
          {selectedTool === 'brush' && (
            <>
              <div className="Brush_Thickness Tooltip">
                <div className="Brush_Small" />
                <div className="Tooltip_Text">1px</div>
              </div>
              <div className="Brush_Thickness Tooltip">
                <div className="Brush_Medium" />
                <div className="Tooltip_Text">3px</div>
              </div>
              <div className="Brush_Thickness Tooltip">
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
            />
            <div className="Tooltip_Text">Color Picker</div>
          </div>
        </div>
      )}
    </div>
  );
}

Toolbar.propTypes = {};

export default Toolbar;
