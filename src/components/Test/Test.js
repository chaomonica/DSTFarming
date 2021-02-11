import React, {useState, useEffect} from 'react';

import TextField from '@material-ui/core/TextField';

import Tooltip from './Tooltip.js'

const Test = () => {


  return (
    <>
      <p>Hello...am Test</p>
      <Tooltip content={"mouse is hovering"}/>
    </>
  )
}

export default Test;
