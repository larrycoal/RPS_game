import React from "react";
import { RulesImage,RulesImageTWO } from "../assets/index";
const RulesModal = ({ showModal, closeModal, game ="RPS" }) => {
  return (
    <div
      className="rules_wrapper"
      style={{ display: !showModal ? "none" : "flex" }}
    >
      <div>
        <span>RULES</span>
        <span onClick={closeModal}>X</span>
      </div>
      {game === "RPS" ? <RulesImage /> : <RulesImageTWO />}
    </div>
  );
};

export default RulesModal;
