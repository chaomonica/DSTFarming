import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import CropDisplay from './components/CropDisplay.js';

const App = () => {

  return (
    <>
      <h1>DST Interactive Crop Guide</h1>

      <CropDisplay/>

    </>
  )
}




ReactDOM.render(<App />, document.getElementById('app'))

