import React, { useState } from 'react'

function SignUp() {

  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div>
      <h3>Sign Up Form</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit">Submit your Information</button>

        <div>
          <h5>Inputted Details:</h5>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
        </div>
      </form>
    </div>
  )
}

export default SignUp



// ***************************Old code********************************

// import React, { useState } from 'react'

// function SignUp() {

//     const [form, setForm] = useState({
//         name: "",
//         email: ""
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setForm({
//             ...form,
//         [e.target.name]: e.target.value
//         });
// };


//   return (
//     <div> 
//         <h3>Sign Up Form</h3>
//         <form onSubmit={handleSubmit}> 
//             <input
//                 type='text'
//                 name="name"
//                 value={form.name}
//                 onChange={handleSubmit}
//              />
//             <input
//                 type='text'
//                 name="email"
//                 value={form.email}
//                 onChange={handleSubmit}
//              />
//             <button>Submit</button>

//             <ul>
//                 <h5>Inputed Details:</h5>
//                  <p>Name: {form.name}</p>
//                 <p>Email: {form.email}</p> 
//             </ul>
//         </form>
//     </div>
//   )
// }

// export default SignUp