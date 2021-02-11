import React, {useState}  from 'react';

//https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const Tooltip = ({content}) => {
  const [toggle, setToggle] = useState(false)

  if (toggle) {
  return (
  <>
    <p
      onMouseLeave = {()=>{
        console.log("starting setTimeout")
        setTimeout(
            ()=>{
              setToggle(false);
              console.log("setToggle COmplete")
            }
          , 1
        )
        }}
    >{content}</p>
  </>)
  } else {
    return (
      <p
       onMouseEnter = {()=>{setToggle(true)}}op
      >{"original text"}</p>
    )
  }

}

export default Tooltip;