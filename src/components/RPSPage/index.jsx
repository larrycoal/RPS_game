import React, { useState } from "react";
import Piece from "../../utils/piece";
import { RockLogo, ScissorsLogo, PaperLogo } from "../../assets/index";
import "./index.css";
import RulesModal from "../../utils/rules";

const index = ({goHome}) => {
  const [showModal, setShowModal] = useState(false);
  const [gameData, setGameData] = useState({
    user: null,
    computer: null,
    result: { outcome: "", score: 0 },
  });
  const opts = [
    { pick: "Rock", logo: RockLogo, color: "#eda621" },
    { pick: "Paper", logo: PaperLogo, color: "#8f5ce7" },
    { pick: "Scissors", logo: ScissorsLogo, color: "#4dbcd1" },
  ];

  const evaluator = {
    RockPaper: "Paper",
    RockScissors: "Rock",
    ScissorsPaper: "Scissors",
    ScissorsRock: "Rock",
    PaperRock: "Paper",
    PaperScissors: "Scissors",
  };
  const handleComppick = () => {
    let randomIdx = Math.floor(Math.random() * opts.length);
    return opts[randomIdx];
  };
  const handleGameplay = (userpick) => {
    let compPick = handleComppick();
    let newGameData = {
      user: userpick,
      computer: compPick,
    };
    console.log(evaluator[userpick.pick + compPick.pick]);
    if (userpick.pick === compPick.pick) {
      let tempResult = { outcome: "DRAW", score: gameData.result.score };
      newGameData.result = tempResult;
    } else if (evaluator[userpick.pick + compPick.pick] === userpick.pick) {
      let tempResult = { outcome: "YOU WIN", score: gameData.result.score + 1 };
      newGameData.result = tempResult;
    } else if (evaluator[userpick.pick + compPick.pick] === compPick.pick) {
      let tempResult = {
        outcome: "YOU LOSE",
        score: gameData.result.score - 1,
      };
      newGameData.result = tempResult;
    }
    setGameData(newGameData);
  };
  const handlePlayAgain = () => {
    setGameData({
      user: null,
      computer: null,
      result: gameData.result,
    });
  };
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
          <p>{gameData.result.score}</p>
        </div>
      </div>
      {!gameData.user && (
        <div className="game_board">
          <Piece
            Logo={RockLogo}
            color="#eda621"
            click={() =>
              handleGameplay({ pick: "Rock", logo: RockLogo, color: "#eda621" })
            }
          />
          <Piece
            Logo={ScissorsLogo}
            color="#4dbcd1"
            click={() =>
              handleGameplay({
                pick: "Scissors",
                logo: ScissorsLogo,
                color: "#4dbcd1",
              })
            }
          />
          <Piece
            Logo={PaperLogo}
            color="#8f5ce7"
            click={() =>
              handleGameplay({
                pick: "Paper",
                logo: PaperLogo,
                color: "#8f5ce7",
              })
            }
          />
        </div>
      )}
      {gameData.user && (
        <div className="result_board">
          <div className="left">
            <p>YOU PICKED</p>
            <Piece
              Logo={gameData.user.logo}
              color={gameData.user.color}
              winner={gameData.result.outcome === "YOU WIN"}
            />
          </div>
          <div className="middle">
            <p>{gameData.result.outcome}</p>
            <button onClick={handlePlayAgain}>PLAY AGAIN</button>
          </div>
          <div className="right">
            <p>THE HOUSE PICKED</p>
            <Piece
              Logo={gameData.computer.logo}
              color={gameData.computer.color}
              winner={gameData.result.outcome === "YOU LOSE"}
            />
          </div>
        </div>
      )}
      <button className="home_btn" onClick={goHome}>
        HOME
      </button>
      <button className="rules_btn" onClick={() => setShowModal(!showModal)}>
        RULES
      </button>
      <RulesModal
        showModal={showModal}
        closeModal={() => setShowModal(!showModal)}
      />
    </div>
  );
};

export default index;
