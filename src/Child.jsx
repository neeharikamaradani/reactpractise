import React from 'react'
import { useContext } from 'react'
import GrandChild from "./GrandChild"
import userContext from './context/UserContext'

const Child = () => {

  const {name,age,setAge,setName} = useContext(userContext)

  return (
    <div>
      <h2>Child</h2>
      <p> Name is {name}</p>
<GrandChild/>
    </div>
  )
}

export default Child


