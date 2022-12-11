import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

function UseAPI() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => setData(data.data))
  }, [])

  return (
    <>
      {data.map((e) => (
        <p key={uuidv4()}>
          {e.id}: {e.title}
        </p>
      ))}
    </>
  )
}

export default UseAPI
