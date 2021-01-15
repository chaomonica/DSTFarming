import React from 'react';
import reactDOM from 'react-dom';

const App = () => {
  return (
    <h1>Hello from react</h1>
  )
}

reactDOM.render(<App />, document.getElementById('app'))