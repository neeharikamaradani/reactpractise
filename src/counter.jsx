import React from 'react'

const counter = ({count,counter}) => {

  function Increment(){
counter(count+1)
}
  
  function Decrement(){
counter(count-1)
}

  return (
<div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}> Decrement </button>
      <p>{count}</p>
    </div>
  )
}

export default counter