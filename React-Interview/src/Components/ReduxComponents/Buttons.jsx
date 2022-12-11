import React from 'react'
import { useDispatch } from 'react-redux'

import { increment, decrement } from '../../Redux/actions'

function Buttons() {
    const dispatch = useDispatch()

    const handleClick = (operator) => {
        if(operator === "+"){
            dispatch(increment())
        }else{
            dispatch(decrement())
        }
    }

  return (
    <>
        <button onClick={() => handleClick("+")}>Increment</button>
        <button onClick={() => handleClick("-")}>Decrement</button>
    </>
  )
}

export default Buttons