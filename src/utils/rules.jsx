import React from "react";
import { RulesImage } from "../assets/index";
const RulesModal = ({ showModal, closeModal }) => {
  return (
    <div
      className="rules_wrapper"
      style={{ display: !showModal ? "none" : "flex" }}
    >
      <div>
        <span>RULES</span>
        <span onClick={closeModal}>X</span>
      </div>
      <RulesImage />
    </div>
  );
};

export default RulesModal;
