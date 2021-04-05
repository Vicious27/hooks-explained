import React, { useState } from "react";
import "./App.css";

function UserPoints() {

  const [username, setUsername] = useState(``);
  const [isUsernameSaved, setIsUsernameSaved] = useState(false);
  const [points, setPoints] = useState(0);


  return (
    <>
      {isUsernameSaved ? (
        <>
          <h1>
            {username} : {points}
          </h1>
          <p>
            <button onClick={() => setPoints(points + 1)}>Add Point</button>
            <button onClick={() => setPoints(0)}>Clear Points</button>
          </p>
          <p>
            <button
              onClick={() => {
                setIsUsernameSaved(false);
              }}>Edit Username</button>
            <button
              onClick={() => {
                setUsername(``);
                setPoints();
                setIsUsernameSaved(false);
              }}>Clear Username</button>
          </p>
        </>
      ) : (
        <p>
          <input
            id="username"
            onChange={e => setUsername(e.target.value)} placeholder="Username" />
          <button
            onClick={() => setIsUsernameSaved(true)}>Save Username</button>
        </p>
      )}
    </>
  );
}

export default UserPoints;