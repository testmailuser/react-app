import React, {Component} from 'react'

class App extends Component {

  state = {
    data:[],
  }

  componentDidMount(){
    const url="https://ghibliapi.herokuapp.com/films"

    fetch(url)
      .then((results)=> {
        return results.json()
      })
      .then((results)=> this.setState({data:results}))
  }

  render(){
    const {data}=this.state

    const movieNames=data.map((rows,index)=>{
      return <li key={index}>{rows.title}: {rows.description.substring(0,50)}</li>
    })
    return(
      <ul>{movieNames}</ul>
    )
  }
}

export default App
