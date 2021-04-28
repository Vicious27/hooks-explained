import React, { useState } from "react";

const Practice2 = () => {

  return (
    <>
      <h1>Scoreboard</h1>
      <div style={{
        display: `flex`,
        maxWidth: `300px`,
        justifyContent: `space-between`,
      }}>
        <h2>Home: Points</h2>
        <h2>Away: Points</h2>
      </div>
      <p>
        <button>Reset Points</button>
      </p>
    </>
  );
};

export default Practice2;

