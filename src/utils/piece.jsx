import React from "react";
import "./index.css";
const piece = ({ Logo, color, click, winner,height = "200px", width="200px" }) => {
  return (
    <div
      className={winner ? "pieceWrapper winner" : "pieceWrapper"}
      style={{ border: `20px solid ${color}`,height,width }}
      onClick={click}
    >
      <Logo />
    </div>
  );
};

export default piece;
