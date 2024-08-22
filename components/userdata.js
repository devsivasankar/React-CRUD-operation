import React, { useState } from "react";
import Resultdata from "./Resultdata"; // Another component to pass the data to

function Userdata() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleForm(e) {
    e.preventDefault();

    const newUser = { name, age, email, number, city };

    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } 
    else {
      setUsers([...users, newUser]);
    }

    setName("");
    setAge("");
    setEmail("");
    setNumber("");
    setCity("");
  }

  function handleEdit(index) {
    const user = users[index];
    setName(user.name);
    setAge(user.age);
    setEmail(user.email);
    setNumber(user.number);
    setCity(user.city);
    setEditingIndex(index);
  }

  function handleDelete(index) {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter Your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Your Age..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Your Number..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">
          {editingIndex !== null ? "Update" : "Submit"}
        </button>
        
      </form>

        <div className="container">
            <h2>User Data Table</h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>{user.number}</td>
                                <td>{user.city}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)} className="editbtn">Edit</button>
                                    <button onClick={() => handleDelete(index)} className="delbtn">Delete</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                </table>

        </div>


      {/* Pass user data to another component */}
      <Resultdata users={users} />
    </>
  );
}

export default Userdata;

