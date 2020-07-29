import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the game</p> */}
        <input type="text" name="name" 
          value={'WELCOME TO THE GAME'}
          autoFocus
          class="no-outline"
          style={{ width: "400px" }}
        />
      </header>
    </div>
  );
}

export default App;
