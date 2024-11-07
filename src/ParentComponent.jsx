import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  const [cells, setCells] = useState([false, false, false, false]);
  const onCount = cells.filter(cell => cell).length;

  const toggleCell = (index) => {
    setCells(prevCells =>
      prevCells.map((cell, i) => (i === index ? !cell : cell))
    );
  };

  return (
    <div>
      <h2>Count: {onCount}</h2>
      <div className="grid">
        {cells.map((isOn, index) => (
          <ChildComponent
            key={index}
            isOn={isOn}
            toggle={() => toggleCell(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ParentComponent
