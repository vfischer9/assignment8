import React from 'react'
import TableRow from './TableRow'

function renderRows(numRows, numCols){
    console.log('numRows' + numRows)
    let allRows = []
    for(let i = 0; i < numRows; i++){
        console.log('renderRows called')
        allRows.push(<TableRow cols={numCols} />)
    }
    return allRows
}


function Table(props) {

    console.log(props)

    let numRows = props.numRows
    let numCols = props.numCols

    return (
        <table className = 'table'>
           {renderRows(numRows, numCols)}
        </table>
    )
}

export default Table
