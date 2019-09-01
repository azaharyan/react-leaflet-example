import React from 'react';
import './App.css';
import Map from './Map.js'
import MapSimple from './MapSimple.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MapSimple />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
