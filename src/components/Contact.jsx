import React from 'react'

function Contact({phone, email}) {
  return (
    <div>
        <h3>My Contact details 🔎</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>X: info@me</p>

    </div>
  )
}

export default Contact