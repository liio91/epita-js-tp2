import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

// const cellStyle = {
//   display: "block",
//   backgroundColor: "white",
//   width: "200px",
//   height: "200px",
//   border: "1px solid #333",
//   outline: "none",
//   textAlign: "center",
//   lineHeight: "200px",
//   cursor: "pointer"
// };

const getStyle = (isOver) => ({...cellStyle, backgroundColor: isOver ? 'grey': 'white' })

const getPlayer = (player) => ({...cellStyle, backgroundColor: player === "player 1" ? "red" : "blue"})

// const Cell = ({ onClick }) => <div onClick={onClick} style={cellStyle}>?</div>;

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      over: false
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {
    if (this.props.currentPlayer != null)
    {
      return (
        <div onClick={this.props.onClick} onMouseOver={() => {this.setState({over: true})}} onMouseOut={() => {this.setState({over: false})}} style={getPlayer(this.props.currentPlayer)}>?</div>
      );
    }
    return (
      <div onClick={this.props.onClick} onMouseOver={() => {this.setState({over: true})}} onMouseOut={() => {this.setState({over: false})}} style={getStyle(this.state.over)}>?</div>
    );
  }
}


// const Cell = () => <div onMouseEnter style={cellStyle}>?</div>;

// const myDefaultStyle = {
//   borderRadius: 1,
// }

// const MyComponent = ({ onClick = () => { } }) => (
//   <div
//     style={{ ...myDefaultStyle, borderRadius: isMouseOver ? 0 : 1 }}
//     onClick={onClick} />
// );

export default Cell;
