import React from 'react'
import Square from './Square'

// Load quiz
import Questions from '../Questions/Questions'
import Questions2 from '../Questions2/Questions2'

class Grid extends React.Component {

  state = {
    selectedSquare: [0,0],

    firstModal_show: false,
    firstModal_complete: false,

    secondModal_show: false,
    secondModal_complete: false,
  }

  makeSquares = () => {
    const tiles = ["red", "blue", "yellow", "purple", "green"]
    let arr = []
    let key = 0
    for(let i = 0; i < (this.props.gridWidth); i++) {
        for(let j = 0; j < this.props.gridWidth; j++) {
          arr.push(<Square
                      x={j}
                      y={i}
                      key={key++}
                      tile={ tiles[(Math.floor(Math.random() * tiles.length))] }
                      selectedSquare={ this.state.selectedSquare }/>)
      }
    }
    return arr
  }

  handleKeyPress = (e) => {
    switch (e.key) {
      case "ArrowUp":
        this.move(0, 1);
        break;
      case 'ArrowRight':
        this.move(1, 1);
        break;
      case 'ArrowDown':
        this.move(0, -1);
        break;
      case 'ArrowLeft':
        this.move(1, -1);
        break;
    }
  }

  move = (dir, change) => {
    let coords = this.state.selectedSquare
    if ((coords[dir] + change) > -1 && (coords[dir] + change) < this.props.gridWidth) {
      coords[dir] += change
    }

    // This this where we detect collison Quiz 1
    // console.log(this.state.selectedSquare)
    if(this.state.selectedSquare[0]==1 & this.state.selectedSquare[1]==3){
      console.log("We need pop up for qualifying info")
      this.setState({secondModal_show: true})
      // console.log(this.state.firstModal_show)
    } else {
      this.setState({secondModal_show: false})
      // console.log(this.state.firstModal_show)
    }

    // This this where we detect collison Quiz 2
    if(this.state.selectedSquare[0]==4 & this.state.selectedSquare[1]==2){
      console.log("We need pop up for qualifying info")
      this.setState({firstModal_show: true})
      // console.log(this.state.firstModal_show)
    } else {
      this.setState({firstModal_show: false})
      // console.log(this.state.firstModal_show)
    }

    this.setState({
      selectedSquare: coords
    })
  }

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyPress)
  }

  render() {

    if(this.state.firstModal_show == true){
      console.log("Render Modal")
      return (
        <div>
          <Questions2/>
        </div>
      )
    }

    if(this.state.secondModal_show == true){
      console.log("Render Modal")
      return (
        <div>
          <Questions/>
        </div>
      )
    }

    return (
      <div>
        <ul style={{ padding: 0, margin: 20 }}>
          <li>Instructions:</li>
          <li>Use the arrow keys to navigate</li>
          <li>Find your path to new opportunities</li>
        </ul>
        
        <div className="grid-box"
           style={{"width": this.props.gridWidth * 150, "height": this.props.gridWidth * 150}}>
        { this.makeSquares()}
        </div>
      
      </div>

    )
  }
}

export default Grid
