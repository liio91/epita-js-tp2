import React from "react";

// FIXME: change message and color based on `gameState`'s value
const GameInfo = ({ gameState = "stale", currentPlayer = "unkown" }) => {
  if ( gameState === "won")
    return <h3 style={{ color: 'red' }}>{currentPlayer === "player 1" ? "player 2" : "player 1"} Won the game</h3>;
  else if ( gameState === "draw")
    return <h3 style={{ color: 'red' }}>Draw</h3>;
  return <h3 style={{ color: 'blue' }}>It's your turn {currentPlayer}</h3>;
};

export default GameInfo;
