import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  const addUser = async () => {
    await axios.post(`http://${window.location.hostname}:3000/add`, { name });
    alert("User added!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🚀 MERN App</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;