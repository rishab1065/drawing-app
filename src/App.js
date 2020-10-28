import React, { useState } from 'react';
import './App.css';
import DrawingBoard from './components/DrawingBoard';
import Toolbar from './components/Toolbar';

function App() {
  const [cursorStyle, setCursorStyle] = useState({
    lineWidth: 1,
    strokeStyle: 'black',
  });

  return (
    <div className="App">
      <Toolbar cursorStyle={cursorStyle} setCursorStyle={setCursorStyle} />
      <DrawingBoard cursorStyle={cursorStyle} />
    </div>
  );
}

export default App;
