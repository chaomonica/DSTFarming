import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {cropData} from '../../data/cropData.js';

import Combination from './Combination';
import CombinationDisplay from './CombinationDisplay';
import CropTable from './CropTable.js';

const DST = () => {
  const [crops, orderCrops] = useState(cropData)
  const [combination, updateCombination] = useState(3);
  const [selectedCrop, updateselectedCrop] = useState(['Carrot Plant']);
  const [highlight, updateHighlight] = useState(null);

  return (
    <>
    <h1>DST Interactive Crop Guide</h1>
    <Combination updateCombination={updateCombination}/>
    <CombinationDisplay combination={combination} crops={crops} updatedSelectedCrop={updateselectedCrop}/>
    <CropTable crops={crops} selectedCrop={selectedCrop}/>


    </>
  )
}

export default DST;


