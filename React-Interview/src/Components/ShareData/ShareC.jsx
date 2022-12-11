import React, { useContext } from 'react'

import { PersonData } from "./ShareA"
 
function ShareC() {
    const person = useContext(PersonData)

  return (
    <div>ShareC: {person.fName} {person.lName}</div>
  )
}

export default ShareC