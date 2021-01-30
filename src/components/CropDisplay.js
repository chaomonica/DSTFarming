import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {cropData} from '../data/cropData.js';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// //plant, autumn, winter, spring, summer, growth formula, compost, manure, drink

const CropDisplay = () => {
  const [crops, orderCrops] = useState(cropData)

  const handleClick = (e) => {
    e.preventDefault;

    let newOrder = [...crops]
    newOrder.sort(function(a, b){
      return a[0].charCodeAt(0)-b[0].charCodeAt(0);
    })
    console.log(newOrder)
    orderCrops(newOrder);
  }

  return (
    <>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={handleClick}>Crop</TableCell>
            <TableCell>Autumn</TableCell>
            <TableCell>Winter</TableCell>
            <TableCell>Spring</TableCell>
            <TableCell>Summer</TableCell>
            <TableCell>Growth Formula</TableCell>
            <TableCell>Compost</TableCell>
            <TableCell>Manure</TableCell>
            <TableCell>Drink</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crops.map(function(currCrop, index){
              return (
              <TableRow key={index}>
                <TableCell>{currCrop[0]}</TableCell>
                <TableCell>{JSON.stringify(currCrop[1])}</TableCell>
                <TableCell>{JSON.stringify(currCrop[2])}</TableCell>
                <TableCell>{JSON.stringify(currCrop[3])}</TableCell>
                <TableCell>{JSON.stringify(currCrop[4])}</TableCell>
                <TableCell>{currCrop[5]}</TableCell>
                <TableCell>{currCrop[6]}</TableCell>
                <TableCell>{currCrop[7]}</TableCell>
                <TableCell>{currCrop[8]}</TableCell>
              </TableRow>)
            })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default CropDisplay;
