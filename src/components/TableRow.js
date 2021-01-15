import React from 'react'
import TableCell from './TableCell'

function renderCols(numCols, newColor){
    console.log('numCols' + numCols)
    let allCols = []
    for(let i = 0; i < numCols; i++){
        allCols.push(
            <TableCell 
            color = {newColor}
        />)
    }
    return allCols
}

function TableRow(props) {

    let newColor = props.color
    
    return (
        <tr className='row'>
            {renderCols(props.cols, newColor)}
        </tr>
    )
}

export default TableRow
