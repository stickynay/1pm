import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
  render() {
    return (
      <div>
        Start
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Board />
        </div>
        <div>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
