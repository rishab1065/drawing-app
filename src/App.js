import './App.css';
import DrawingBoard from './components/DrawingBoard';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <DrawingBoard />
    </div>
  );
}

export default App;
