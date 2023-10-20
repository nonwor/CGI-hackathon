import React from 'react'
import penImage from './pen.png';
import compImage from './comp.jpg';

class Square extends React.Component {
  state = {
    tile: this.props.tile
  }

  render() {

    const quiz_1 = this.props.x === 4 && this.props.y === 2;
    const quiz_2 = this.props.x === 1 && this.props.y === 3;

    return (
      <div
        className={this.props.selectedSquare[0] === this.props.x &&
           this.props.selectedSquare[1] === this.props.y ?
           `selected square ${this.state.tile}` : `square ${this.state.tile}`}>
            {quiz_1 && (
            <img
            src={penImage} // Replace with the actual path to your image
              alt="Overlay Image"
              className="overlay-image"
            />
            )}
            
            {quiz_2 && (
            <img
            src={compImage} // Replace with the actual path to your image
              alt="Overlay Image"
              className="overlay-image"
            />
            )}
      </div>
      
    )
  }

}

export default Square
