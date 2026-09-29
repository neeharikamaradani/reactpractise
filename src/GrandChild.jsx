import React ,{useContext} from 'react'
import UserContext from './context/UserContext'

const GrandChild = () => {
    const {name,age,setAge,setName} = useContext(UserContext)
  return (
    <div>
<h2> GrandChild </h2>
<p> name :{name} Age : {age}</p>

<button onClick={()=>setAge(29)}> change Age </button>
<br></br>
<button onClick={()=>setName("Lakshman")}> Change Name </button>
    </div>
  )
}

export default GrandChild

