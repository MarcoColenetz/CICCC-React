import React, { useState } from 'react'

function AddDelete() {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setInput(value)
    }

    const handleAdd = () => {
        setList(prevState => [
            ...prevState, input
        ])
        setInput("")
    }

    const handleDelete = (id) => {
        setList(prevState => prevState.filter((item, index) => index !== id))
    }

  return (
    <>
        <input type="text" name="number" value={input} onChange={handleOnChange}/>
        {list.map((item, index) => <p key={index} id={index} onClick={() => handleDelete(index)}>{item}</p>)}
        <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default AddDelete