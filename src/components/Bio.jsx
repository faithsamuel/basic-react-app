import React from 'react'

function Bio({level, name}) {
  const bio = "By my God I can run through a troop, and leap over a wall";

  return (
    <div>
        <h3>My Bio 👩🏾‍💻</h3>
        <p>Name: {name}</p>
        <p>Confidence level: {level}</p>
        <p>Bio: {bio} </p>
    </div>
  )
}

export default Bio