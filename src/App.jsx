import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import RPSPage from "./components/RPSPage";
import RPSLSPage from "./components/RPSLSPage";
function App() {
  const [gameMode, setGameMode] = useState(null);
  return (
    <>
      {gameMode === "RPS" ? (
        <RPSPage />
      ) : gameMode === "RPSLS" ? (
        <RPSLSPage />
      ) : (
        <Home handleSetGameMode={(mode) => setGameMode(mode)} />
      )}
    </>
  );
}

export default App;
