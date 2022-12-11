import React, { useContext } from 'react'

import { PersonData } from './ShareA'

function ShareD() {
    const person = useContext(PersonData)

  return (
    <div>ShareD: {person.fName} {person.lName}</div>
  )
}

export default ShareD