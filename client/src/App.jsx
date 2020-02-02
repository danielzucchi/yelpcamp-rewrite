import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  state = {
    hotels: []
  };

  fetchHotels = () => {
    axios
      .get('/hotels')
      .then(res => {
        console.log(res.data);
        this.setState({ hotels: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    const hotels = this.state.hotels.map(hotel => (
      <div key={hotel._id}>
        <h2>{hotel.name}</h2>
        <h4>{hotel.price}</h4>
        <p>{hotel.description}</p>
      </div>
    ));

    return (
      <div>
        <NavBar />
        <div className="App">
          <h1>HotelReviews</h1>
          <button onClick={this.fetchHotels}>Fetch</button>
          <div>{hotels}</div>
        </div>
      </div>
    );
  }
}

export default App;
