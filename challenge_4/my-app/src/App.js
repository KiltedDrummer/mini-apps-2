import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      ended: false,
      count: 100,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  checkCount() {
    let cleared = 0;
    const { board } = this.state;
    for (let i = 0 ; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (board[i][j][1]) {
          cleared += 1;
        }
      }
    }

    this.setState({
      count: 100 - cleared,
    }, this.checkWin);
  }

  checkWin() {
    console.log('CHECK WIN', this.state.count)
    if (this.state.count === 10 && !this.state.ended) {
      alert('YOU WIN!\nRefresh Page to Play Again!')
      this.setState({
        ended: true,
      });
    }
  }

  createBoard() {
    const rows = new Array(10).fill('X');
    const board = rows.map((ele) => {
      return [
        [0, false],
        [0, false],
        [0, false],
        [0, false],
        [0, false],
        [0, false],
        [0, false],
        [0, false],
        [0, false],
        [0, false],
      ];
    });
    let bombLocations = new Set();
    while (bombLocations.size < 10) {
      bombLocations.add(Math.floor(Math.random() * 100));
    }
    bombLocations.forEach(num => {
      board[Math.floor(num / 10)][num % 10][0] = -1;
      const position = [Math.floor(num / 10), num % 10]
      for (let i = position[0] - 1; i < position[0] + 2; i += 1) {
        for (let j = position[1] - 1; j < position[1] + 2; j += 1) {
          if (!board[i] || !board[i][j]) {
            // skip
          } else if (board[i][j][0] !== -1) {
            board[i][j][0] += 1;
          }
        }
      }
    });
    

    this.setState({
      board,
      count: 100,
      ended: false,
    });
  }

  handleClick(e) {
    const position = [e.target.getAttribute('row'), e.target.getAttribute('col')];
    if (this.state.ended) {
      return;
    }
    const { board } = this.state;
    const newBoard = board.slice().map(row => {
      return row.slice();
    });
    const updatedBoard = this.updateLocation(position, newBoard);
    this.setState({
      board: updatedBoard,
    }, this.checkCount);
  }

  updateLocation(position, board) {
    const value = board[position[0]][position[1]][0];

    if (value === 0) {
      board[position[0]][position[1]][1] = true;
      for (let i = position[0] - 1; i < position[0] + 2; i += 1) {
        for (let j = position[1] - 1; j < position[1] + 2; j += 1) {
          if (!board[i] || !board[i][j]) {
            // skip
          } else if (board[i][j][0] >= 0 && !board[i][j][1]) {
            board = this.updateLocation([i, j], board);
          }
        }
      }
    } else if (value > 0) {
      board[position[0]][position[1]][1] = true;
    } else {
      for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
          if (!board[i] || !board[i][j]) {
            // skip
          } else if (board[i][j][0] === -1) {
            board[position[0]][position[1]][1] = true;
          }
        }
      }
      this.setState({
        ended: true,
      }, this.gameOver);
    }

    return board;
  }

  gameOver() {
    if (this.state.ended) {
      alert('BOOM! \nGame Over \nRefresh Page to Play Again!')
    }
  }

  componentDidMount() {
    this.createBoard();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Mine Sweeper
        </header>
        <Board matrix={this.state.board} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
