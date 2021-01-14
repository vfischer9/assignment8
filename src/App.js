import './App.css';
import Table from './components/Table'
import React, { Component } from 'react';


class App extends Component {

  constructor(props){
    super(props)
    this.state={
      numRows: 1,
      numCols: 1
    }
  }

  handleAddRowButton = () => {
    console.log('row button pushed')
    let existingRows = this.state.numRows
    this.setState({
      numRows: existingRows + 1
    })
    console.log(existingRows)
  }

  
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
      <Table numRows = {this.state.numRows} numCols = {this.state.numCols}/>
     
    </div>
  );
}
}

export default App;
