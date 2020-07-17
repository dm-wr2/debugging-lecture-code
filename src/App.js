import React from 'react';
import Console from './Components/Console';
import Network from './Components/Network';
import Sources from './Components/Sources';
import './App.css';

function App() {
  return (
    <div className="App">
      <Console />
      <Network />
      <Sources />
    </div>
  );
}

export default App;
