import React from "react";
import "./index.css"
const piece = ({ Logo, color }) => {
  return (
    <div className="pieceWrapper" style={{border:`15px solid ${color}`}}>
      <Logo />
    </div>
  );
};

export default piece;
