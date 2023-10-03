import React,{useState} from 'react'
import "./App.css";
import SetStates from './SetStates';
import SetForm from './SetForm';
import ChildProp from './ChildProp';
import HighOrdCOmp from './HigherOC';
import Wrapper from './Render_Props/Wrapper';
import Component1 from './Render_Props/Component1';
import Component2 from './Render_Props/Component2';
import DisplayListdata from './DisplayListdata';
export default function App() {

  const List_array=['list1','list2','list3','list4','list5'];
  const [childval,setChildval]=useState('hello from parent')
  // const [currentActive,setCurrentActive]=useState(1)
  
  // const increment=(e)=>{
  //   setCurrentActive(currentActive+1)
  //   e.target.setAttribute("className","active");
  //   debugger
  // }
  
  // console.log(currentActive);
  // const decrement=()=>{

  // }
  //childprops component data...
  const [parentval,setParentval]=useState("hello from parent")
  function handlefun(parentValue){
    alert(parentValue)
  }
  const formFunction=(name,email,password,contact)=>{
    alert(`${name}, ${email}, ${password}, ${contact}`);
  }
  const variab="hello from parent"
  return (
    <div>
      {/* <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className="circle active" id="1" value={1}>1</div>
        <div className="circle" id="2" value={1}>2</div>
        <div className="circle" id="3" value={1}>3</div>
        <div className="circle" id="4" value={1}>4</div>
      </div>

      <button className="btn" id="prev" onClick={decrement} disabled>Prev</button>
      <button className="btn" id="next" onClick={increment}>Next</button>
    </div> */}
    {/* <SetStates/> */}
    {/* <SetForm/> */}
    {/* <ChildProp value="Hello everyone i am sharing data from parent to child..." handleFunction={handlefun} formdata={formFunction} message={parentval} setMessage={setParentval}/> */}
    {/* <ChildProp formdata={formFunction} message={parentval} setMessage={setParentval}/> */}


    {/* render props stsarts here... */}
    {/* <Wrapper render={(count,increment)=>{
      return <Component1 count={count} increment={increment}/>
    }}/>
    <br/>
    <Wrapper render={(count,increment)=>{
      return <Component2 count={count} increment={increment}/>
    }}/> */}

    {/* render props end here */}
    {/* <DisplayListdata data={List_array}/> */}
    <ChildProp/>
    <DisplayListdata data={List_array} childval={childval} setChildval={setChildval} chh={variab}/>
    </div>

    
  )
}
