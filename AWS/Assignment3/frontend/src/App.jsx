import { useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = async () => {
    await axios.post(`http://${window.location.hostname}:3000/add`, { title, content });
    alert("Blog Post added!");
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "sans-serif" }}>
      <h1>🚀 Cloud Blog App</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", width: "300px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ padding: "8px", width: "300px", height: "100px" }}
        />
      </div>
      <button onClick={addPost} style={{ padding: "10px 20px", cursor: "pointer" }}>Add Post</button>
    </div>
  );
}

export default App;