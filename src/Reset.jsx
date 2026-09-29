import React from 'react'

const Reset = ({count,counter}) => {
  return (
    <div> 
      <button onClick={()=>counter(0)}> Reset </button>
    </div>
  )
}

export default Reset