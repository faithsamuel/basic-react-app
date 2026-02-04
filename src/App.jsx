import { useState, useEffect } from "react";
import Task from "./Task";
import Bio from "./components/Bio";
import Contact from "./components/Contact";


const products = [
  {id: 1, name: "Laptop", price: 500},
  {id: 2, name: "Phone", price: 200},
  {id: 3, name: "Tablet", price: 500}
];

const product = products.find(product => product.id === 2);

// Add a new product to the array

const addNewProduct = [...products, {id: 4, name: "Smart Watch", price: 700}]



function App() {
// const [tasks, setTasks] = useState(["Pray", "Code"]);
// const [input, setInput] = useState("");

// Posts
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


// Add Tasks function
// function addTask() {
//   if (!input) return;
//   setTasks([...tasks, input]);
//   setInput("");
// }


// Fetch data when the page loads
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

      {/* Map Exercise in React */}
      {/* {products.map(product => <li key={product.id}>{product.name}</li>)} */}



      {/* Filter through products array */}
      {/* <ul>
       {products.filter(product =>product.price < 400)
       .map(product => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
       ))
       }
      </ul> */}

      {/* Find a product in the Products array */}
      {/* <ul>
        {products.find(product => product.id === 2)
        .map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}</li>
        ))}
      </ul> */}

      <ul>
  {product && (
    <li key={product.id}>
      {product.name} - ${product.price}
    </li>
  )}
</ul> 

      {/* New products - Spread Operator */}
      {addNewProduct.map(product => <li key={product.id}>{product.name}</li>)}

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

      {/* Bio component */}
      <Bio/>
      <Contact/>

    </div>
  );
}

export default App;