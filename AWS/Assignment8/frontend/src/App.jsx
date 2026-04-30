import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [attendees, setAttendees] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchAttendees = async () => {
    const res = await axios.get(`http://${window.location.hostname}:3000/attendees`);
    setAttendees(res.data);
  };

  useEffect(() => {
    fetchAttendees();
  }, []);

  const registerEvent = async () => {
    if (!name || !email) return alert("Please fill all fields!");
    await axios.post(`http://${window.location.hostname}:3000/register`, { name, email });
    alert("Registration Successful! 🎉");
    setName("");
    setEmail("");
    fetchAttendees();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>🎟️ Cloud Event Registration</h1>
      
      <div style={{ marginBottom: "30px", padding: "20px", background: "#f8f9fa", display: "inline-block", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h3>Register Now</h3>
        <input 
          placeholder="Your Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ padding: "10px", width: "250px", marginBottom: "10px", display: "block", margin: "0 auto 10px" }} 
        />
        <input 
          type="email"
          placeholder="Your Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: "10px", width: "250px", marginBottom: "15px", display: "block", margin: "0 auto 15px" }} 
        />
        <button onClick={registerEvent} style={{ padding: "10px 20px", cursor: "pointer", background: "#28a745", color: "white", border: "none", borderRadius: "5px", fontWeight: "bold" }}>Register</button>
      </div>

      <div style={{ margin: "0 auto", maxWidth: "500px", textAlign: "left" }}>
        <h3>Registered Attendees ({attendees.length})</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {attendees.map((a) => (
            <li key={a._id} style={{ background: "#eee", padding: "10px", marginBottom: "5px", borderRadius: "5px" }}>
              <strong>{a.name}</strong> - {a.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;