import React, { Component } from "react"
import axios from "axios"
import "./App.css"

class App extends Component {
  state = {
    campgrounds: {}
  }

  componentDidMount() {
    axios
      .get("/home")
      .then(res => {
        console.log(res)
        this.setState({ campgrounds: res })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { campgrounds } = this.state
    return (
      <div className="App">
        <h1>YelpCamp</h1>
        <p>{campgrounds.data}</p>
      </div>
    )
  }
}

export default App
