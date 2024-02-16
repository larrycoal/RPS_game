import React from "react";
import Piece from "../../utils/piece";
import { RockLogo, ScissorsLogo, PaperLogo } from "../../assets/index";
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
      <div className="game_board">
        <Piece Logo={RockLogo} color="#eda621" />
        <Piece Logo={ScissorsLogo} color="#4dbcd1" />
        <Piece Logo={PaperLogo} color="#8f5ce7" />
      </div>
      <button className="rules_btn">RULES</button>
    </div>
  );
};

export default index;
