import { useState } from "react";
import Task from "./Task";

function App() {
const [tasks, setTasks] = useState(["Pray", "Code"]);
const [input, setInput] = useState("");

function addTask() {
  if (!input) return;
  setTasks([...tasks, input]);
  setInput("");
}
  
  return (
    <div>
      <h1>React</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="One thing I'll finish today"
      />

      <button onClick={addTask}>
        {input ? "Add Task" : "Enter a task"}
      </button>

      {tasks.length === 0 && <p>No tasks yet. Start small.</p>}
      <ul>
        {tasks.map((task) => (
          <Task key={task} title={task} />
        ))}
      </ul>

    </div>
  );
}

export default App;