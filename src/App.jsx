import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import RPSPage from "./components/RPSPage";
function App() {
  const [gameMode, setGameMode] = useState(null);
  return (
    <>
      {gameMode === "RPS" ? (
        <RPSPage />
      ) : gameMode === "RPSLS" ? (
        <div>RPSLS</div>
      ) : (
        <Home handleSetGameMode={(mode) => setGameMode(mode)} />
      )}
    </>
  );
}

export default App;
