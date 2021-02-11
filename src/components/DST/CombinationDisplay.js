import React, {useState} from 'react';


const CombinationDisplay = (props) => {
  const [pairings, changePairings] = useState(props.combination)
  const [twoPairing, changeTwoPairing] = useState([
  [ 'Carrot Plant', 'Watermelon Plant' ],
  [ 'Potato Plant', 'Toma Root Plant' ],
  [ 'Toma Root Plant', 'Eggplant Stalk' ],
  [ 'Pumpkin Plant', 'Watermelon Plant' ]
])

  const handleHover = (e) => {
    e.preventDefault()
    console.log('hovering!')
  }

  if (props.combination === 2) {
    return (
      <div>
        <p>{props.combination}</p>
        <ul>
        {twoPairing.map(function(currTwoPair, index){
          return (
            <li key={index}>
              <div style={{display: 'inline-block'}} onClick={handleHover}>{currTwoPair[0]}</div><> </><div style={{display: 'inline-block'}}>{currTwoPair[1]}</div>
            </li>
          )
        })}
        </ul>
      </div>
    )
  } else if (props.combination === 3) {
     return (
       <p>{props.combination}</p>
      )
  }
  else {return (<></>)}
}

export default CombinationDisplay;


