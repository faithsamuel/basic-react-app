import React from 'react'

function ProfileCard({name, role}) {

  const skillsList = [ "Problom solving", "software development", "project management"

  ]
  return (
    <div>
        <p>Name: {name}</p>
        <p>Role: {role}</p>
        <ul>Skill list: {skillsList.map(skill => <li key={skill}>{skill}</li>)}</ul>
        
    </div>
  )
}

export default ProfileCard