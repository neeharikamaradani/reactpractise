import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    console.log("Timer started")
    const timer= setInterval(() => {
      setSeconds((prev) => prev + 1)
      // setSeconds(seconds+1)
    }, 1000)
return ()=>{
   console.log("Start Stopped")
  clearInterval(timer);
}
    

  },[])
  return (
  <div> {seconds}  </div>
  )
}

export default Timer
