import React from 'react'
import TableCell from './TableCell'

function renderCols(numCols){
    console.log('numCols' + numCols)
    let allCols = []
    for(let i = 0; i < numCols; i++){
        console.log('renderCols called')
        allCols.push(<TableCell />)
    }
    return allCols
}


function TableRow(props) {

    return (
        <tr className='row'>
            {renderCols(props.cols)}
        </tr>
    )
}

export default TableRow
