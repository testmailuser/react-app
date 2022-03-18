import React, {Component} from 'react'

const TableHead= (props)=>{
    const {tableHeadData}=props
    return (
        <thead>
          <tr>
            <th>{tableHeadData.name}</th>
            <th>{tableHeadData.job}</th>
            <th>{tableHeadData.deleteHeader}</th>
          </tr>
        </thead>
    )
}

const TableBody=(props)=>{
    const {tData,removeData}= props
    const rows=tData.map((row,index)=>{
      return(
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button onClick={()=> props.removeData(index)}> Delete</button></td>
        </tr>
      )
    })

    return <tbody>{rows}</tbody>
}

const Table=(props)=>{
    const tData= props.tableData
    const {removeData,tableHeadData}= props
    return (
      <table>
        <TableHead tableHeadData={tableHeadData}/>
        <TableBody tData={tData} removeData={removeData}/>
      </table>
    )
}

export default Table
