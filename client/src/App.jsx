import React, { Component } from "react"
import axios from "axios"
import "./App.css"

class App extends Component {
  state = {
    hotels: {}
  }

  componentDidMount() {
    axios
      .get("/home")
      .then(res => {
        console.log(res)
        this.setState({ hotels: res })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { hotels } = this.state
    return (
      <div className="App">
        <h1>HotelReviews</h1>
        <p>Hello</p>
        <p>{hotels.data}</p>
      </div>
    )
  }
}

export default App
