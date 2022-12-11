import React, { useState } from 'react'
import withCalculator from './withCalculator'

 
function ComponentA(props) {
  const [num, setNum] = useState(0)

  return (
    <>  
      <h2>{num}</h2>
      <button onClick={() => setNum(props.calculateFn(num))}>Increment by two</button>
    </>
  )
}

export default withCalculator(ComponentA, 2)