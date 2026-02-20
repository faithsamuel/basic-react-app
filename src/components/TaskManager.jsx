import React, { useState } from 'react'

function TaskManager() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!task.trim()) return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    setTask(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
    <h1>Task Manager</h1>

     <form onSubmit={handleSubmit}>
      <input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter a Task'
        />

        <button type='submit' disabled={!task.trim()}>Add</button>
     </form>

     <ul>
      {tasks.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteTask(index)}>❌</button>
        </li>
      ))}
     </ul>

    </div>
  )
}

export default TaskManager