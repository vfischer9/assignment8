import './App.css';
import Table from './components/Table'
import React, { Component } from 'react';

class App extends Component {

  //constructor
  constructor(props){
    super(props)
    this.state={
      numRows: 1,
      numCols: 1,
      color: "",
      clearColor: "white"
    }
  }

  //add rows
  handleAddRowButton = () => {
    console.log('row button pushed')
    let existingRows = this.state.numRows
    this.setState({
      numRows: existingRows + 1
    })
    console.log(existingRows)
  }

  //add cols
  handleAddColButton = () => {
    console.log('col button pushed')
    let existingCols = this.state.numCols
    this.setState({
      numCols: existingCols + 1
    })
    console.log(existingCols)
  }

  
  clearCell = () => {
    this.setState({
      color: ""
    })
  }

  fillAll = () => {

  }

  render(){
    return (
      <div className="App">
        <br></br>
        <button onClick={this.handleAddRowButton}>Add Row</button>
        <button onClick={this.handleAddColButton}>Add Column</button>
        <button onClick={this.clearCell}>Clear Colors</button>
        <button onClick={this.fillAll}>Fill All Cells</button>

      <br></br><br></br>
      
        <label>Choose a color to change a cell to: </label>
        <select onChange={ (event) => {
            this.setState({
              color: event.target.value
            })
          }}>
                <option value="white">White</option>
                <option value="lightblue">Blue</option>
                <option value="gold">Yellow</option>
                <option value="darkseagreen">Green</option>
                <option value="tomato">Red</option>
                <option value="orange">Orange</option>
                <option value="mediumpurple">Purple</option>
                <option value="pink">Pink</option>
          </select>

          <br></br><br></br><br></br>

            <Table 
            numRows = {this.state.numRows} 
            numCols = {this.state.numCols}
            color = {this.state.color}
            />
            
      </div>
    );
  }
}

export default App;
