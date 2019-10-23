import React from 'react';
import Square from '../../components/Square/Square'

class Board extends React.Component {
    constructor(props) {
      super(props);
        let initArray = [];
      for (let i = 0; i < 9; i++) {
        initArray.push(i)
      }
      this.state = {
        squares: Array(9).fill(null),
        currentTurn: 0
      };
    }
  
    renderSquare(i) {
      return <Square value={this.state.squares[i]} clicked={() => this.clickHandler(i)}/>;
    }

    clickHandler(index) {
        console.log(this.state.squares);
        if (this.state.squares[index] === null) {
            let currentTurn = this.state.currentTurn === 0? 1: 0;
            let updatedArray = this.state.squares;
            const ret = updatedArray.slice(0);
            ret[index] = currentTurn;
            this.setState({currentTurn: currentTurn,
                squares: ret})
        }

    }
    
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

export default Board;