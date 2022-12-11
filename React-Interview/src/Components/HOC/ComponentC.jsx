import React, { useState } from 'react'
import withCalculator from './withCalculator'

function ComponentC(props) {
  const [num, setNum] = useState(0)

  return (
    <>
      <h2>{num}</h2>
      <button onClick={() => setNum(props.calculateFn(num))}>Increment by two hundred</button>
    </>
  )
}

export default withCalculator(ComponentC, 200)