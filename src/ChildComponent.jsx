import React from 'react'

function ChildComponent({ isOn, toggle }) {
  return (
    <div
      onClick={toggle}
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid gray',
        backgroundColor: isOn ? 'black' : 'white',
      }}
    ></div>
  )
}

export default ChildComponent
