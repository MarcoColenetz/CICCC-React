import React from 'react'

function withCalculator(Component, amount) {

  const calculate = (value) => {
    return value + amount
  }

  return () => (
    <>
      <Component calculateFn={calculate} />
    </>
  )
}

export default withCalculator
