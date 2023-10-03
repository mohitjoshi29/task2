import React, { useEffect, useState } from 'react'

export default function SetForm() {
    const [inputUser,setInputUser]=useState('');
    const [count,setCount]=useState(0);

    const handling=(e)=>{
        setInputUser(e.target.value);
    }
    // useEffect(()=>{
    //     setCount(count+1);
    //     console.log("hit");
    // },[inputUser])

  return (
    <div>
        <input type="text" value={inputUser} onChange={handling}/>
        <br/>
        <button type='submit' onClick={()=>setInputUser('mohit')}>submit</button>
        <br/>
        set value on btn click : {inputUser} user name...
        <br/>
        change count on btn click : {count} time...
    </div>
  )
}
