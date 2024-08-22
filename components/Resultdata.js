import React from "react";

function Resultdata({ users }) {
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resultdata;
