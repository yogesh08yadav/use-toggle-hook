import logo from './logo.svg';
import './App.css';
import useToggle from 'use-toggle-hook';
import { useState } from 'react';

function App() {
  const[isOn, setIsOn] = useToggle()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          isOn ?   <h3>You are doing good</h3> 
        :
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        }
        
        <button onClick={() => setIsOn(!isOn)}>Is active {`${isOn}`}</button>
      </header>
    </div>
  );
}

export default App;
