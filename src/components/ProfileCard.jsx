import React, { useState } from 'react'

function ProfileCard({name, role}) {

  const skills = [ "Problom solving", "software development", "project management"];

  const [areSkillsVisible, showSkills] = useState(false);

  const toggleBtn = ()=> {
      showSkills(!areSkillsVisible)
  }

  return (
    <div>
        <p>Name: {name}</p>
        <p>Role: {role}</p>

        {
          areSkillsVisible &&
          <ul>Skill list: {skills.map(skill => {
            return <li key={skill}>{skill}</li>
          })} </ul>
        }
        

        <button onClick={toggleBtn}>Show Skills</button>
        
    </div>
  )
}

export default ProfileCard