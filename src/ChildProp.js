import React, { useState } from 'react'
import HighOrdCOmp from './HigherOC'
import DisplayListdata from './DisplayListdata';

function ChildProp(props) {
    // const [inmess,incfun]=useState('');
    const List_array1=[11,22,33,44,55];
  return (
    <div>
        {/* {props.value}
        <br/>
        <button className='btn btn-danger' onClick={()=>props.handleFunction('hiii')}>Submit</button>
        <br/>
        <button className='btn btn-success' onClick={()=>props.formdata('mohit','mohit@gmail.com','rererefgdfd',3434345)}>Second function</button>
        <br/>
        {props.message}
        <button className='btn btn-secondary' onClick={()=>props.setMessage('hello from child')}>hello</button>
        <button className='btn btn-secondary' onClick={()=>props.setMessage('hello from parent')}>reset</button>
        <br/>
        <button className='btn btn-primary' onClick={props.incfun}>HOC</button>
        {props.inMessage}
        {props.inmess} */}
        <DisplayListdata data={List_array1}/>
    </div>
  )
}
export default HighOrdCOmp(ChildProp)
