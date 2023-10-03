import React from 'react'

export default function Component1(props) {
  return (
    <div>
      <button onClick={props.increment}>Counter1</button>
      counter1: {props.count}
    </div>
  )
}
