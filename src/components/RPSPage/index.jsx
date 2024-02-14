import React from "react";
import "./index.css";
const index = () => {
  return (
    <div className="RPSPage">
      <div className="banner">
        <h1>
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </h1>
        <div>
          <p>Score</p>
          <p>10</p>
        </div>
      </div>
      <div className="game_board"></div>
    </div>
  );
};

export default index;
