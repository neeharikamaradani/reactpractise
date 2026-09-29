import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedData(form);

    alert("Form Submitted");
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(event) =>
            setForm({
              ...form,
              name: event.target.value,
            })
          }
        />

        <br />

        <input
          type="text"
          placeholder="Enter Email"
          onChange={(event) =>
            setForm({
              ...form,
              email: event.target.value,
            })
          }
        />

        <br />

        <input
          type="text"
          placeholder="Enter Address"
          onChange={(event) =>
            setForm({
              ...form,
              address: event.target.value,
            })
          }
        />

        <br />

        <button type="submit">Submit</button>
      </form>

      <h2>{submittedData.name}</h2>
      <h2>{submittedData.email}</h2>
      <h2>{submittedData.address}</h2>
    </div>
  );
};

export default App;






// import React ,{useState} from 'react'

// const App = () => {

//   const[name,setName] = useState("")
//   const[email,setEmail] = useState("")
//   const[address,setAddress] = useState("")


//   const [submittedname, setSubmittedName] = useState("")
//   const [submittedemail, setSubmittedEmail] = useState("")
//     const [submittedaddress, setSubmittedAddress] = useState("")

//     const submittedform = (event) =>{
// event.preventDefault();
// setSubmittedName(name)
// setSubmittedEmail(email)
// setSubmittedAddress(address)
// alert("Form Submitted")
//   }

//   return (
//     <div>

//       <form onSubmit={submittedform}> 
// <input type= "text" placeholder='Enter Your Name' onChange={(event)=> setName(event.target.value) } required/> <br></br>
// <input type= "text" placeholder='Enter Your Email' onChange={(event) => setEmail(event.target.value)}/> <br></br>
// <input type= "text" placeholder='Enter Your Address' onChange={(event)=>setAddress(event.target.value)}/>
// <button>Submit</button>

// </form>
// <div>
// {
// submittedname && (<h2> {submittedname} - {submittedemail}</h2>)
// }
// </div>
// <h3>{submittedaddress}</h3>
//     </div>
//   )
// }

// export default App