import React, { useState } from "react";
import "./App.css";

const Practice2 = () => {

  const [homePoints, setHomePoints] = useState(0);
  const [awayPoints, setAwayPoints] = useState(0);
  /*
   * 1. Create homePoints and awayPoints in state using hooks
   * 2. Display the points for the home and away teams
   * 3. Add a button for each team to add one point
   * 4. Add an onClick event to the Reset button that sets both points to zero
   */

  const handleClickHome = () => {
    setHomePoints(homePoints + 2);
  };

  const handleClickAway = () => {
    setAwayPoints(awayPoints + 2);
  };

  const handleClickReset = () => {
    setHomePoints(0);
    setAwayPoints(0);
  };

  return (
    <>
      <h1>Scoreboard</h1>
      <div className="scores" style={{
        display: `flex`,
        maxWidth: `300px`,
        justifyContent: `space-between`,
      }}>
        <h2>
          Home: {homePoints}
          <button onClick={handleClickHome}>
            Add Score!!
          </button>
        </h2>
        <h2>
          Away: {awayPoints}
          <button onClick={handleClickAway}>
            Add Score!!
            </button>
        </h2>
      </div>
      <p>
        <button onClick={handleClickReset}>Reset Points</button>
      </p>
    </>
  );
};

export default Practice2;

