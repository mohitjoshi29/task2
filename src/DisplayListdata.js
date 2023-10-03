import React, { useState } from 'react'

export default function DisplayListdata(props) {
    console.log(props.data);
    const [parentvalue,setParentvalue]=useState('hello from child');
    const dataa='hello from child...'
    return (
        <div>
            <ul style={{ listStyleType: 'none' }}>
                {props.data.map((value, index) => {
                    return (
                        <li key={value.index}>{value} is present at location(indexing): {index}</li>
                    )
                })}
            </ul>
                <button className='btn btn-secondary' onClick={()=>props.setChildval(dataa)}>Lifting</button>
                {props.childval}
                <button className='btn btn-secondary' onClick={()=>props.setChildval('hello from parent...')}>Lifting</button>
                <br/>
                <br/>
                <button onClick={(props)=>setParentvalue(props.chh)}>Game over</button>
                {props.parentvalue}
                {parentvalue}
        </div>
    )
}
