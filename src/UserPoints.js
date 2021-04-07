import React, { useState } from "react";
import "./App.css";

function Heading({ username, points }) {
  return (
    <h1>
      {username} : {points}
    </h1>
  );
}

function Button({ label, onClick }) {
  return <button onClick={() => onClick()}>{label}</button>
}

function UserPoints() {
  const [username, setUsername] = useState(null);
  const [isUsernameSaved, setIsusernameSaved] = useState(false);
  const [points, setPoints] = useState(0);

  return (
  
  )
}


export default UserPoints;