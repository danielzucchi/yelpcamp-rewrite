import React, { Component } from "react"
import axios from "axios"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"

class App extends Component {
  state = {
    hotels: []
  }

  fetchHotels = () => {
    axios
      .get("/hotels")
      .then(res => {
        console.log(res)
        this.setState({ hotels: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    const hotels = this.state.hotels.map(h => <div>{h.name}</div>)

    return (
      <div>
        <NavBar />
        <div className="App">
          <h1>HotelReviews</h1>
          <button onClick={this.fetchHotels}>Fetch</button>
          <p>{hotels}</p>
        </div>
      </div>
    )
  }
}

export default App
