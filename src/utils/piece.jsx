import React from "react";
import "./index.css"
const piece = ({ Logo, color,click }) => {
  return (
    <div className="pieceWrapper" style={{border:`20px solid ${color}`}} onClick={click}>
      <Logo />
    </div>
  );
};

export default piece;
