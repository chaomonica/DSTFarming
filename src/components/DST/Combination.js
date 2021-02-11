import React, {useState} from 'react';
import styled from 'styled-components';

//CSS for button
const StyledButton = styled.button`
background-color: #4CAF50;
border: 2px solid black;
color: white;
border-radius: 8px;
text-align: center;
display: inline-block;
front-size: 20px;
margin-left:40px;
&:hover {
  background-color: black;
  color: white;
  }
}
`


const Combination = (props) => {

  let pairings = [['Two Crop Pairings', 2], ['Three Crop Pairings', 3], ['Four Crop Pairings', 4], ['Five Crop Pairings', 5]]

  const handleClick = (e) => {
    e.preventDefault();
    let value = parseInt(e.target.getAttribute('value'));
    props.updateCombination(value);
  }

  return (
    <div>
      {pairings.map(function(currPairing, index){
        return (
        <StyledButton key={index} value={currPairing[1]} onClick={handleClick}>
          {currPairing[0]}
        </StyledButton>)
      })}
    </div>
  )
}

export default Combination;