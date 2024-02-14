import React from 'react';
import {
  RockLogo,
  PaperLogo,
  ScissorsLogo,
  SpockLogo,
  LizardLogo,
} from "../../assets/index";
import "./index.css"

const index = ({ handleSetGameMode }) => {
  return (
    <>
      <div className="home_wrapper">
        <h1 className="banner">Welcome to the ultimate game of chance</h1>
        <div className="rps_launch">
          <p className="title">
            <span>Rock</span>
            <span>Paper</span>
            <span>Scissors</span>
          </p>
          <div className="icons">
            <RockLogo fillcolor="#eda621" height="48" width="48" />
            <PaperLogo fillcolor="#4dbcd1" />
            <ScissorsLogo fillcolor="#8f5ce7" />
          </div>
          <button onClick={()=>handleSetGameMode("RPS")}>Let's Go</button>
        </div>

        <div className="seprator">
          <p>
            <hr />
            OR
            <hr />
          </p>
          <p>Go with a BANG</p>
        </div>
        <div className="rpsls_launch">
          <p className="title">
            <span>Rock</span>
            <span>Paper</span>
            <span>Scissors</span>
            <span>Lizard</span>
            <span>Spock</span>
          </p>
          <div className="icons">
            <RockLogo fillcolor="#eda621" height="48" width="48" />
            <PaperLogo fillcolor="#4dbcd1" />
            <ScissorsLogo fillcolor="#8f5ce7" />
            <SpockLogo fillcolor="#4dbcd1" />
            <LizardLogo fillcolor="#eda621" width="65" />
          </div>
          <button onClick={()=>handleSetGameMode("RPSLS")}>Let's Go</button>
        </div>
      </div>
    </>
  );
};

export default index;