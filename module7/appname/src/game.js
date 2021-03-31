// reference: took help from google and friend.
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ''
    };
    

    this.play = this.play.bind(this);
  }
  
  
  initBoard() {
   
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row);
    }
    
    this.setState({
      board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: ''
    });
  }
  
  togglePlayer() {
    return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
  }
  
  play(c) {
    if (!this.state.gameOver) {
      // Place piece on board
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }

      // Check status of board
      let result = this.checkAll(board);
      if (result) {
        this.setState({ board });
      } else {
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }
    
    }
  }
  
   
  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';    
  }
  
  checkAll(board) {
    return  this.checkDraw(board);
  }
  
  componentWillMount() {
    this.initBoard();
  }
  
  render() {
    return (
      <div>       
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
          </tbody>
        </table>
        
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}
// Row component
const Row = ({ row, play }) => {
  return (
    <tr>
      {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
    </tr>
  );
};
const Cell = ({ value, columnIndex, play }) => {
  let color = 'white';
  if (value === 1) {
    color = 'red';
  } else if (value === 2) {
    color = 'yellow';
  }
    
  return (
    <td>
      <div className="cell" onClick={() => {play(columnIndex)}}>
        <div className={color}></div>
      </div>
    </td>
  );
};
export default App;