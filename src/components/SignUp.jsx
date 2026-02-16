import React, { useState } from 'react'

function SignUp() {

    const [form, setForm] = useState({
        name: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
            ...form,
        [e.target.name]: e.target.value
        });
};


  return (
    <div> 
        <h3>Sign Up Form</h3>
        <form onSubmit={handleSubmit}> 
            <input
                type='text'
                name="name"
                value={form.name}
                onChange={handleSubmit}
             />
            <input
                type='text'
                name="email"
                value={form.email}
                onChange={handleSubmit}
             />
            <button>Submit</button>

            <ul>
                <h5>Inputed Details:</h5>
            </ul>
        </form>
    </div>
  )
}

export default SignUp