import React, { useState } from 'react';
import './App.css';
import DrawingBoard from './components/DrawingBoard';
import Header from './components/Header';
import Toolbar from './components/Toolbar';

function App() {
  const [cursorStyle, setCursorStyle] = useState({
    lineWidth: 1,
    strokeStyle: 'black',
  });

  return (
    <div className="App">
      <DrawingBoard cursorStyle={cursorStyle} />
      <Header />
      <Toolbar cursorStyle={cursorStyle} setCursorStyle={setCursorStyle} />
    </div>
  );
}

export default App;
