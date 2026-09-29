import React, { useState } from 'react'
import UserContext from './context/UserContext'
import Parent from "./components/Parent"

const App = () => {

  const [name,setName] = useState("Neeharika")
  const [age,setAge] = useState(24)

  return (
    <UserContext.Provider value={{name,age,setAge,setName}}>App
<Parent/>
    </UserContext.Provider>  
  )
}

export default App