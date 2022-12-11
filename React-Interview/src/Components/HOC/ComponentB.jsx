import React, { useState } from 'react'
import withCalculator from './withCalculator'

function ComponentB(props) {
  const [num, setNum] = useState(0)

  return (
    <>  
      <h2>{num}</h2>
      <button onClick={() => setNum(props.calculateFn(num))}>Increment by twenty</button>
    </> 
  )
}

export default  withCalculator(ComponentB, 20)