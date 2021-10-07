import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (): JSX.Element => (
  <div className="App">
    <h1>
      Hello Message:
      {' '}
      {process.env.REACT_APP_HELLO}
    </h1>
  </div>
);

export default App;
