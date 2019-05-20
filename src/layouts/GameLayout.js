import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

// const onMouseOver = () => this.setState({ currentPlayer: "toto" });

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1",
      gameState: 'running',
      winner: null
    };

  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {

    function winCheck(line){
      return state.cells[line[2]] !== null && state.cells[line[2]] === state.cells[line[1]] && state.cells[line[1]] === state.cells[line[0]];
    }
    if (!state.cells.includes(null)){
      state.gameState = 'draw'
    }
      [[8,7,6],[5,4,3],[2,1,0],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[3,4,6],].forEach(line => {
      if (winCheck(line)){
        state.gameState = 'won'
        state.winner = line[0]
        console.log("win", state.cells)
      }
    });

    // console.log(this.state.cells);

    return state;
  }

  handleClick(index) {
    // this.setState({ currentPlayer: "toto" });
    console.log(this.state.gameState);
    if (this.state.cells[index] !== null || this.state.gameState !== 'running')
      return

      
    let newCells = [...this.state.cells]
    newCells[index] = this.state.currentPlayer
    this.setState({cells: newCells, currentPlayer: this.state.currentPlayer === "player 1" ? "player 2" : "player 1"}) 

    // this.setState({currentPlayer: this.state.currentPlayer === "player 1" ? "player 2" : "player 1" })
  }

  render() {
    return (
      <div
        style={gameLayoutStyle}
        // onClick={() => this.setState({ currentPlayer: this.state.currentPlayer === "player 1" ? "player 2" : "player 1" })}
      // onClick={this.handleClick}
      >
        <GameInfo currentPlayer={this.state.currentPlayer}  gameState={this.state.gameState}/>
        {/* <GameInfo currentPlayer={this.state.currentPlayer} /> */}
        <Board cells={this.state.cells} onClickCell={(cellIndex) => this.handleClick(cellIndex)} onMouseOver=""/>
      </div>
    );
  }
}

export default GameLayout;
