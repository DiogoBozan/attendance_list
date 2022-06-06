import "./styles.css";
import Card from "../../components/Card";
import React, { useState, useEffect } from "react";

function Home() {
  const [studentName, setStudentName] = useState("");
  // armazernar os estudantes no array:
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar_url: "" });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      id: Math.random() * 100,
      time: new Date().toLocaleTimeString("pt-pt", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents([...students, newStudent]);
    // ou poderiar usar asssim:
    // setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/DiogoBozan")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.login,
          avatar: data.avatar_url,
        });
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Attendance List</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Img Profile" />
        </div>
      </header>
      <input
        onChange={(e) => setStudentName(e.target.value)}
        type="text"
        placeholder="
        Enter the name..."
      />
      <button onClick={handleAddStudent} type="button">
        Add
      </button>

      {students.map((student) => (
        <Card key={student.id} name={student.name} time={student.time} />
      ))}
    </div>
  );
}

export default Home;
