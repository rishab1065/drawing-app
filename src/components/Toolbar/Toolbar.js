import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Toolbar.scss';
import brush from '../../assets/svgs/draw_tool.svg';
import highlighter from '../../assets/svgs/highlighter.svg';
import eraser from '../../assets/svgs/eraser.svg';

function Toolbar(props) {
  const [selectedTool, setSelectedTool] = useState(null);

  const onColorChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="Toolbar">
      <div className="Tools_Container">
        <img
          src={brush}
          alt="Brush"
          className="Tool"
          onClick={() => setSelectedTool('brush')}
        />
        <img
          src={highlighter}
          alt="Highlighter"
          className="Tool"
          onClick={() => setSelectedTool('highlighter')}
        />
        <img
          src={eraser}
          alt="Eraser"
          className="Tool"
          onClick={() => setSelectedTool('eraser')}
        />
      </div>
      {(selectedTool === 'brush' || selectedTool === 'highlighter') && (
        <div className="SubTools_Container">
          {selectedTool === 'brush' && (
            <>
              <div className="Brush_Thickness">
                <div className="Brush_Small" />
              </div>
              <div className="Brush_Thickness">
                <div className="Brush_Medium" />
              </div>
              <div className="Brush_Thickness">
                <div className="Brush_Large" />
              </div>
            </>
          )}
          <div className="Tool_Color">
            <input
              type="color"
              id="html5colorpicker"
              onChange={onColorChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

Toolbar.propTypes = {};

export default Toolbar;
