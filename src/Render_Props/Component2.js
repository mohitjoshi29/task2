import React from 'react'

export default function Component2(props) {
  return (
    <div>
        <button onClick={props.increment}>Counter2</button>
      Counter2: {props.count}
    </div>
  )
}
