import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get(`http://${window.location.hostname}:3000/tasks`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;
    await axios.post(`http://${window.location.hostname}:3000/add-task`, { title });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id, currentStatus) => {
    await axios.put(`http://${window.location.hostname}:3000/update-task/${id}`, { completed: !currentStatus });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://${window.location.hostname}:3000/delete-task/${id}`);
    fetchTasks();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>✅ Cloud Task Manager</h1>
      
      <div style={{ marginBottom: "30px", padding: "20px", background: "#f1f1f1", display: "inline-block", borderRadius: "8px" }}>
        <input 
          placeholder="New Task Title..." 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{ padding: "8px", width: "250px", marginRight: "10px" }} 
        />
        <button onClick={addTask} style={{ padding: "8px 15px", cursor: "pointer", background: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>Add Task</button>
      </div>

      <div style={{ margin: "0 auto", maxWidth: "400px", textAlign: "left" }}>
        {tasks.map((task) => (
          <div key={task._id} style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #ddd" }}>
            <span 
              onClick={() => toggleTask(task._id, task.completed)} 
              style={{ cursor: "pointer", textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "gray" : "black" }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task._id)} style={{ cursor: "pointer", background: "#dc3545", color: "white", border: "none", borderRadius: "4px", padding: "5px 10px" }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;