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
    <>
      {isUsernameSaved ? (
        <>
          <Heading username={username} points={points} />
          <p>
            <Button label="Add Point" onClick={() => setPoints(points + 1)} />
            <Button label="Clear Points" onClick={() => setPoints(0)} />
          </p>
          <p>
            <Button
              label="Edit Username"
              onClick={() => { setIsusernameSaved(false) }} />
          </p>
        </>
      ) : (
        <p>
          <input
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
          <Button
            label="Save Username"
            onClick={() => {
              setIsusernameSaved(true);
            }} />
        </p>
      )}
    </>
  );
}


export default UserPoints;