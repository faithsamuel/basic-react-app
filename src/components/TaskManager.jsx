import React from 'react'

function TaskManager() {
  return (
    <div>
    <h1>Task Manager</h1>
     <form>
      <input 
        type='text'
        placeholder='Enter a Task'
        />

        <button>Submit</button>
     </form>
    </div>
  )
}

export default TaskManager