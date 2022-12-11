import React, { createContext } from 'react'
import ShareB from './ShareB'

export const PersonData = createContext()

function ShareA() {
  const person = {
    fName: 'John',
    lName: 'Connor',
  }

  return (
    <>
      <p>
        ShareA: {person.fName} {person.lName}
      </p>
      <PersonData.Provider value={person}>
        <ShareB />
      </PersonData.Provider>
    </>
  )
}

export default ShareA
