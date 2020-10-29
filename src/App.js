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

  const [recordSroke, setRecordStroke] = useState(true);
  return (
    <div className="App">
      <DrawingBoard cursorStyle={cursorStyle} recordSroke={recordSroke} />
      <Header />
      <Toolbar
        cursorStyle={cursorStyle}
        setCursorStyle={setCursorStyle}
        setRecordStroke={setRecordStroke}
      />
    </div>
  );
}

export default App;
