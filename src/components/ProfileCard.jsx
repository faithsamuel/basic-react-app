import React, { useState } from 'react'

function ProfileCard({name, role}) {

  // const skillsList = [ "Problom solving", "software development", "project management"];

 const [skillsList, setSkill] = useState(["Problem solving", "Software development", "Project management"]);

 const toggleSkill = useState(false);

 const addSkill = () => {
  setSkill([...skillsList, "Tech Sales"]);
 };
  return (
    <div>
        <p>Name: {name}</p>
        <p>Role: {role}</p>
        <ul>Skill list: {skillsList.map(skill => <li key={skill}>{skill}</li>)}</ul>

        <button onClick={addSkill}>Add Skill</button>
        
    </div>
  )
}

export default ProfileCard