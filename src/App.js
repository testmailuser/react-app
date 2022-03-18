import React, {Component} from 'react'
import Table from './Table.js'
import Form from './Form'
class App extends Component {
  state={
     tableData:[],
     tableHeadData:{},
  }

  handleSubmit= (data) => {
    this.setState({tableData: [...this.state.tableData,data]})
    this.setState({tableHeadData:{name:"Name",job:"Job",deleteHeader: "Click to Remove Data"}})
  }

  removeData= index =>{
    const {tableData}=this.state
    if(tableData.length==1){
      this.setState({
        tableHeadData:{}
      })
    }
    this.setState({
      tableData: tableData.filter((data,i)=> i!=index)
    })

  }
  render()
  {
    const {tableData,tableHeadData}=this.state
    return (
      <div className="app">
        <h1>Hello React!</h1>
        <Table tableHeadData={tableHeadData} tableData={tableData} removeData={this.removeData}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App
