import React from 'react';
import './App.css';

const App = (): JSX.Element => (
  <div className="App">
    <h1 id="hello-msg">
      Hello Message:
      {' '}
      {process.env.REACT_APP_HELLO}
    </h1>
  </div>
);

export default App;
