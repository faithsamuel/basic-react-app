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













// *******************Old Code*****************************
// import React, { useState } from 'react'

// function ProfileCard({name, role}) {

//   // const skillsList = [ "Problom solving", "software development", "project management"];

//  const [skillsList, setSkillsList] = useState([
//   "Problem solving",
//   "Software development",
//   "Project management"
// ]);

//  const [toggleSkill, setToggleSkill] = useState(false);

 

// //  const addSkill = () => {
// //   setSkill([...skillsList, "Tech Sales"]);
// //  };

//   return (
//     <div>
//         <p>Name: {name}</p>
//         <p>Role: {role}</p>
//         {
//           toggleSkill &&
//         <ul>Skill list: {skillsList.map(skill => <li key={skill}>{skill}</li>)}</ul>
//         }

//         <button>Show Skill</button>
        
//     </div>
//   )
// }

// export default ProfileCard