import './App.css';
import Table from './components/Table'
import TableCell from './components/TableCell'
import TableRow from './components/TableRow'
import React, { Component } from 'react';


class App extends Component {

  constructor(props){
    super(props)
    this.state={
      numRows: 1
    }
  }

  handleAddRowButton = () => {
    console.log('button pushed')
    let existingRows = this.state.numRows
    this.setState({
      numRows: existingRows + 1
    })
    console.log(existingRows)
  }

render(){
  return (
    <div className="App">
      <button onClick={this.handleAddRowButton}>Add Row</button>
      <Table test = 'testing props' numRows = {this.state.numRows}/>
    </div>
  );
}
}

export default App;
