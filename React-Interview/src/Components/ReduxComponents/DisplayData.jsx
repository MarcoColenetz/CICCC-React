import React from 'react'
import { useSelector } from 'react-redux'
import Buttons from './Buttons'

function DisplayData() {
    const data = useSelector(data => data.count)

  return (
    <>
        <div>Count: {data}</div>
        <Buttons />
    </>
  )
}

export default DisplayData