import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [grade, setGrade] = useState("");

  const fetchStudents = async () => {
    const res = await axios.get(`http://${window.location.hostname}:3000/students`);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async () => {
    await axios.post(`http://${window.location.hostname}:3000/add`, { name, rollNo, grade });
    alert("Student added!");
    setName("");
    setRollNo("");
    setGrade("");
    fetchStudents();
  };

  const updateGrade = async (id) => {
    const newGrade = prompt("Enter new grade:");
    if (newGrade) {
      await axios.put(`http://${window.location.hostname}:3000/update/${id}`, { grade: newGrade });
      alert("Grade updated!");
      fetchStudents();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>🎓 Student Record Manager</h1>
      <div style={{ marginBottom: "20px" }}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ margin: "5px", padding: "5px" }} />
        <input placeholder="Roll No" value={rollNo} onChange={(e) => setRollNo(e.target.value)} style={{ margin: "5px", padding: "5px" }} />
        <input placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)} style={{ margin: "5px", padding: "5px" }} />
        <button onClick={addStudent} style={{ padding: "5px 10px", cursor: "pointer" }}>Add Student</button>
      </div>

      <h3>Student List</h3>
      <table border="1" cellPadding="10" style={{ margin: "0 auto", width: "60%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#eee" }}>
            <th>Name</th>
            <th>Roll No</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.rollNo}</td>
              <td>{s.grade}</td>
              <td>
                <button onClick={() => updateGrade(s._id)} style={{ cursor: "pointer" }}>Update Grade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;