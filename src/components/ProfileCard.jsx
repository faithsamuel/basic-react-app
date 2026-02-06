import React from 'react'

function ProfileCard() {

  const skillsList = [ "Problom solving", "software development", "project management"

  ]
  return (
    <div>
        <p>Name:</p>
        <p>Role:</p>
        <ul>Skill list: {skillsList.map(skill => <li key={skill}>{skill}</li>)}</ul>
        
    </div>
  )
}

export default ProfileCard