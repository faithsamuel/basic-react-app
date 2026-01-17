import Task from "./Task";

function App() {
  const tasks = ["Pray", "Code", "Rest"];
  
  return (
    <div>
      <h1>React</h1>
      <h2>{tasks.length} Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task} title={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;