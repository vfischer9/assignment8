import React from 'react'
import TableRow from './TableRow'

function renderRows(numRows){
    console.log(numRows)
    let allRows = []
    for(let i = 0; i < numRows; i++){
        console.log('renderRows called')
        allRows.push(<TableRow />)
    }
    return allRows
}

function Table(props) {

    console.log(props)

    let numRows = props.numRows

    return (
        <table className = 'table'>
           {renderRows(numRows)}
        </table>
    )
}

export default Table
