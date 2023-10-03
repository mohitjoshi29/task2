import React, { useState } from 'react'
const Higher_oc=HighOrdCOmp=>{
function HigherOC() {
    const [inMessage,setInMessage]=useState('hello HOc')
    const Increment=()=>{
        setInMessage('hello Higher order component')
    }
  return (
    <div>
      <HighOrdCOmp inmess={inMessage} incfun={Increment}/>
    </div>
  )
}
return HigherOC;
}
export default Higher_oc;
