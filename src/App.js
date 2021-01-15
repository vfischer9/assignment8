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
      color: ""
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


render(){
  return (
    <div className="App">

      <button onClick={this.handleAddRowButton}>Add Row</button>
      <button onClick={this.handleAddColButton}>Add Column</button>

     <br></br>
     
      <label>Choose a color to change a cell to: </label>
      <select onChange={ (event) => {
          this.setState({
            color: event.target.value
          })
        }}>
              <option>-Select-</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="purple">Purple</option>
        </select>

        <br></br>

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
