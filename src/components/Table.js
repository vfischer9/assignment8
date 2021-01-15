import React from 'react'
import TableRow from './TableRow'

function renderRows(numRows, numCols, newColor){
    console.log('numRows' + numRows)
    let allRows = []
    for(let i = 0; i < numRows; i++){
        console.log('renderRows called')
        allRows.push(
        <TableRow 
            cols={numCols} 
            color = {newColor} 
        />)
    }
    return allRows
}


function Table(props) {
    let newColor = props.color
    let numRows = props.numRows
    let numCols = props.numCols

    return (
        <table className = 'table'>
           {renderRows(numRows, numCols, newColor)}
        </table>
    )
}

export default Table
