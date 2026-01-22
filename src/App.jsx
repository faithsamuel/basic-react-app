import { useState, useEffect } from "react";
import Task from "./Task";

function App() {
const [tasks, setTasks] = useState(["Pray", "Code"]);
const [input, setInput] = useState("");

// Posts
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// Fetch data

useEffect(()=> {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    setPosts(data);
    setLoading(false);
  })
  .catch((err) => {
    setError(err.message);
    setLoading(false);
  })
}, []);

function addTask() {
  if (!input) return;
  setTasks([...tasks, input]);
  setInput("");
}
  
  return (
    <div>
      <h1>React</h1>

      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}

      {/* <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="One thing I'll finish today"
      />

      <button onClick={addTask} disabled={!input}>
        {input ? "Add Task" : "Enter a task"}
      </button>

      {tasks.length === 0 && <p>No tasks yet. Start small.</p>}
      <ul>
        {tasks.map((task, index) => (
          <Task key={task}
                title={task}
                onDelete={()=>
                  setTasks(tasks.filter((_, i) => i !== index))
                }
             />
        ))}
      </ul> */}

    </div>
  );
}

export default App;