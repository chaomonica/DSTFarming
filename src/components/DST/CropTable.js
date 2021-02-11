import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


// //plant, autumn, winter, spring, summer, growth formula, compost, manure, drink
const StyledRow = styled.tr`
  background-color: #c9daf5;
`

const CropTable = (props) => {
  const [crops, orderCrops] = useState(props.crops)
  const [cropNumber, updateCropNumber] = useState(3);

  const handleClick = (e) => {
    e.preventDefault;

    let newOrder = [...crops]
    newOrder.sort(function(a, b){
      return a[0].charCodeAt(0)-b[0].charCodeAt(0);
    })
    console.log(newOrder)
    orderCrops(newOrder);
  }

  if (crops) {

    return (
      <>
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Autumn</th>
          <th>Winter</th>
          <th>Spring</th>
          <th>Summer</th>
          <th>Growth Formula</th>
          <th>Compost</th>
          <th>Manure</th>
          <th>Drink</th>
        </tr>
        {crops.map(function(currCrop, index){
          let tableData = (
          <>
              <td>{currCrop[0]}</td>
              <td>{JSON.stringify(currCrop[1])}</td>
              <td>{JSON.stringify(currCrop[2])}</td>
              <td>{JSON.stringify(currCrop[3])}</td>
              <td>{JSON.stringify(currCrop[4])}</td>
              <td>{currCrop[5]}</td>
              <td>{currCrop[6]}</td>
              <td>{currCrop[7]}</td>
              <td>{currCrop[8]}</td>
          </>
          )

          if (currCrop[0] === props.selectedCrop[0]) {
            return (
              <StyledRow key={index}>
                {tableData}
              </StyledRow>
            )
          } else {
          return (
            <tr key={index}>
              {tableData}
            </tr>
          )}
        })}
        </tbody>
      </table>
      </>
    )
  } else {return (<></>)}

}

export default CropTable;


